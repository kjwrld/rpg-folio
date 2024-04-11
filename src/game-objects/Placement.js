import { GAME_OBJECTS } from "./objects";
import { Sprite } from "../components/object-graphics/Sprite";

export default class Placement {
  constructor({ id, x, y, frameCoord, size, active = null }) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.frameCoord = frameCoord;
    this.size = size;
    this.active = active; // might use this to distinguish interactive objects
  }

  static createPlacement(p) {
    const components = GAME_OBJECTS[p.id];
    if (!components) {
      if (p.frameCoord) {
        return new Placement(p);
      }
      console.error(`GameObject "${p.id}" not found.`);
      return null;
    }

    const baseX = Placement.parseFrameCoord(components[0].frameCoord).x;

    return components.map((component, index) => {
      const { x: componentX } = Placement.parseFrameCoord(component.frameCoord);
      const xOffset = componentX - baseX;
      const newX = p.x + xOffset;

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

  renderComponent(spriteSheet) {
    return (
      <Sprite
        image={spriteSheet}
        frameCoord={this.frameCoord}
        size={this.size}
      />
    );
  }

  tick() {}
}
