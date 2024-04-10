import { LEVEL_THEMES } from "../helpers/constants";
import { GAME_OBJECTS } from "../helpers/gameObjects";

export class LevelState {
  constructor(level, onEmit) {
    this.id = level.id;
    this.theme = level.theme;
    this.onEmit = onEmit;
    this.initializeState(level.placements);
  }

  initializeState(placements) {
    this.placements = placements.map((p) =>
      this.createPlacement(p.id, p.x, p.y)
    );
  }

  createPlacement(id, x, y) {
    const components = GAME_OBJECTS[id.toLowerCase()];
    if (!components) {
      console.error(`GameObject "${id}" not found.`);
      return null;
    }

    // Get the base 'x' frameCoord for the first component to calculate offsets
    const baseX = this.parseFrameCoord(components[0].frameCoord).x;

    // Generate a placement for each component of the object
    return components.map((component, index) => {
      const { x: componentX } = this.parseFrameCoord(component.frameCoord);
      // Calculate the offset based on the difference in x frame coordinates
      const xOffset = (componentX - baseX) * component.size;

      return {
        ...component,
        id: `${id}_${index}`, // Unique ID for each component
        x: x + xOffset, // Adjust X coordinate based on frameCoord offset
        y, // Y coordinate remains the same for all components
      };
    });
  }

  parseFrameCoord(frameCoord) {
    const [x, y] = frameCoord.split("x").map(Number);
    return { x, y };
  }

  getState() {
    return {
      theme: this.theme,
      placements: this.placements,
    };
  }

  destroy() {
    // Cleanup state if necessary
  }
}
