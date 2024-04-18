import Placement from "../game-objects/Placement";
import { HeroPlacement } from "../game-objects/HeroPlacement";
import { GameLoop } from "./GameLoop";
import { DirectionControls } from "./DirectionControls";

export class LevelState {
  constructor(level, onEmit) {
    this.id = level.id;
    this.theme = level.theme;
    this.background = {
      src: level.background.src,
      width: level.background.width || 0,
      height: level.background.height || 0,
    };
    this.onEmit = onEmit;
    this.directionControls = new DirectionControls();
    this.initializeState(level.placements, level.hero);
  }

  initializeState(placements, hero) {
    this.hero = HeroPlacement.createPlacement(hero, this);
    this.placements = placements
      .flatMap(Placement.createPlacement)
      .filter(Boolean);
    this.activePlacements = this.placements.filter((p) => p.active);
    console.log("gotta make sure these are correct", this.background.width);
    this.startGameLoop();
  }

  isPositionOutOfBounds(x, y) {
    // Ensure the boundary check uses the updated dimensions
    // console.log(
    //   "so is it out of bounds?",
    //   x < 0 || y < 0 || x > this.background.width || y > this.background.height
    // );
    return (
      x < 0 || y < 0 || x > this.background.width || y > this.background.height
    );
  }

  updateBackgroundSize(width, height) {
    this.background.width = width;
    this.background.height = height;
    this.onEmit(this.getState());
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
    this.gameLoop = new GameLoop(() => {
      this.tick();
    });
  }

  tick() {
    if (this.directionControls.direction) {
      this.hero.controllerMoveRequest(this.directionControls.direction);
    }
    this.hero.tick();
    this.activePlacements.forEach((aP) => {
      aP.tick();
    });
    this.onEmit(this.getState());
  }

  destroy() {
    this.gameLoop?.stop();
    this.directionControls.unbind();
  }
}
