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
    const gameObject = GAME_OBJECTS[id];
    if (!gameObject) {
      console.error(`GameObject "${id}" not found.`);
      return null;
    }
    // Merging the object template with the specific placement data
    return { id, x, y, ...gameObject };
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
