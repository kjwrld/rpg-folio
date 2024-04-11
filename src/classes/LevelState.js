import { GAME_OBJECTS } from "../game-objects/objects";
import Placement from "../game-objects/Placement";

export class LevelState {
  constructor(level, onEmit) {
    this.id = level.id;
    this.theme = level.theme;
    this.background = level.background;
    this.onEmit = onEmit;
    this.initializeState(level.placements);
  }

  initializeState(placements) {
    this.placements = placements
      .flatMap(Placement.createPlacement)
      .filter(Boolean);
    this.activePlacements = this.placements.filter((p) => p.active);
    this.onEmit(this.getState());
  }

  getState() {
    return {
      id: this.id,
      theme: this.theme,
      background: this.background,
      placements: this.placements,
    };
  }

  destroy() {}
}
