import Placement from "../game-objects/Placement";
import { HeroPlacement } from "../game-objects/HeroPlacement";
import { GameLoop } from "./GameLoop";

export class LevelState {
  constructor(level, onEmit) {
    this.id = level.id;
    this.theme = level.theme;
    this.background = level.background;
    this.onEmit = onEmit;
    this.initializeState(level.placements, level.hero);
  }

  initializeState(placements, hero) {
    this.hero = HeroPlacement.createPlacement(hero);
    this.placements = placements
      .flatMap(Placement.createPlacement)
      .filter(Boolean);
    this.activePlacements = this.placements.filter((p) => p.active);
    this.startGameLoop();
  }

  getState() {
    return {
      id: this.id,
      theme: this.theme,
      background: this.background,
      placements: this.placements,
      activePlacements: this.activePlacements,
      hero: this.hero,
    };
  }

  startGameLoop() {
    this.gameLoop?.stop();
    this.gameLoop = new GameLoop(() => {
      this.tick();
    });
  }

  tick() {
    let c = 1;
    this.activePlacements.forEach((aP) => {
      aP.tick();
    });
    this.onEmit(this.getState());
  }

  destroy() {
    this.gameLoop?.stop();
  }
}
