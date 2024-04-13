import Placement from "./Placement";
import { HERO } from "../game-objects/objects";
import Hero from "../components/object-graphics/Hero";
import { CELL_SIZE, directionUpdateMap } from "../helpers/constants";

export class HeroPlacement extends Placement {
  static createPlacement(p) {
    const heroConfig = HERO[p[0].id];
    if (!heroConfig) {
      console.error(`Hero "${p[0].id}" not found.`);
      return null;
    }

    return new HeroPlacement({
      ...p[0],
      ...heroConfig[0],
    });
  }

  renderComponent() {
    [this.frameCoord, this.reverse] = this.getFrame();
    return <Hero frameCoord={this.frameCoord} reverse={this.reverse} />;
  }

  tick() {
    this.updateMovementProgress();
  }

  getFrame() {
    return [
      HERO.MOTION[this.movingPixelDirection][0].frameCoord,
      HERO.MOTION[this.movingPixelDirection][0].reverse,
    ];
  }

  controllerMoveRequest(direction) {
    if (this.movingPixelsRemaining > 0) {
      return;
    }
    this.movingPixelDirection = direction;
    this.movingPixelsRemaining = CELL_SIZE;
  }

  updateMovementProgress() {
    if (this.movingPixelsRemaining <= 0) {
      return;
    }
    this.movingPixelsRemaining -= this.travelPixelsPerFrame;
    if (this.movingPixelsRemaining <= 0) {
      this.movingPixelsRemaining = 0;
      this.onDoneMoving();
    }
  }

  onDoneMoving() {
    const { x, y } = directionUpdateMap[this.movingPixelDirection];
    this.x += x;
    this.y += y;
    this.handlePossibleCollisions();
  }

  handlePossibleCollisions() {
    // Implement collision logic or trigger events here
  }
}
