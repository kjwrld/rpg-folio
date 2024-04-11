import { GAME_OBJECTS } from "./objects";

export default class Placement {
  //  constructor({ id, x, y, frameCoord, size }, level) {
  constructor({ id, x, y, frameCoord, size }) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.frameCoord = frameCoord;
    this.size = size;
    // this.level = level;
  }

  //  static createPlacement(p, level) {
  static createPlacement(p) {
    const components = GAME_OBJECTS[p.id];
    if (!components) {
      if (p.frameCoord) {
        return new Placement(p); // Return p as a new placement if frameCoord exists
      }
      console.error(`GameObject "${p.id}" not found.`);
      return null;
    }

    const baseX = Placement.parseFrameCoord(components[0].frameCoord).x;

    return components.map((component, index) => {
      const { x: componentX } = Placement.parseFrameCoord(component.frameCoord);
      const xOffset = componentX - baseX;
      const newX = p.x + xOffset; // Adjust X coordinate based on frameCoord offset

      return new Placement({
        ...component,
        id: `${p.id}_${index}`,
        x: newX,
        y: p.y,
      });
    });
  }

  static parseFrameCoord(frameCoord) {
    const [x, y] = frameCoord.split("x").map(Number);
    return { x, y };
  }

  renderComponent() {
    return null;
  }
}
