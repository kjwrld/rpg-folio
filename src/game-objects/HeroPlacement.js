import Placement from "./Placement";
import { HERO } from "../game-objects/objects";
import Hero from "../components/object-graphics/Hero";
import { directionUpdateMap } from "../helpers/constants";

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
    return <Hero />;
  }

  tick() {
    this.updateMovementProgress();
  }

  contollerMoveRequest(direction) {
    if (this.movingPixelsRemaining > 0) {
      return;
    }
    this.movingPixelDirection = direction;
  }

  updateMovementProgress() {
    if (this.movingPixelsRemaining === 0) {
      return;
    }
    this.movingPixelsRemaining -= this.travelPixelsPerFrame;
    if (this.movingPixelsRemaining <= 0) {
      this.movingPixelsRemaining = 0; // Ensure we don't go negative.
      this.onDoneMoving();
    }
  }

  onDoneMoving() {
    const { dx, dy } = directionUpdateMap[this.movingPixelDirection];
    this.x += dx;
    this.y += dy;
    this.handlePossibleCollisions();
  }

  handlePossibleCollisions() {
    // Implement collision logic or trigger events here
  }
}
