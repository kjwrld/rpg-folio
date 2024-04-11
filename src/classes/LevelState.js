import { GAME_OBJECTS } from "../game-objects/objects";

export class LevelState {
  constructor(level, onEmit) {
    this.id = level.id;
    this.theme = level.theme;
    this.background = level.background;
    this.onEmit = onEmit;
    this.initializeState(level.placements);
  }

  async initializeState(placements) {
    this.placements = placements.flatMap((p) => this.createPlacement(p));
    this.onEmit(this.getState());
  }

  createPlacement(p) {
    const components = GAME_OBJECTS[p.id];
    if (!components) {
      if (p?.frameCoord) {
        return p;
      }
      console.error(`GameObject "${p.id}" not found.`);
    }

    const baseX = this.parseFrameCoord(components[0].frameCoord).x;

    return components.map((component, index) => {
      const { x: componentX } = this.parseFrameCoord(component.frameCoord);
      const xOffset = componentX - baseX;
      const newX = p.x + xOffset; // Adjust X coordinate based on frameCoord offset

      return {
        id: `${p.id}_${index}`,
        x: newX,
        y: p.y,
        ...component,
      };
    });
  }

  parseFrameCoord(frameCoord) {
    const [x, y] = frameCoord.split("x").map(Number);
    return { x, y };
  }

  getState() {
    return {
      id: this.id,
      theme: this.theme,
      background: this.background,
      placements: this.placements,
    };
  }

  destroy() {
    // Cleanup state if necessary
  }
}
