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

    console.log("Creating HeroPlacement with:", p.x, p.y);

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

  controllerMoveRequest(direction) {
    if (this.movingPixelsRemaining > 0) {
      return;
    }
    this.movingPixelDirection = direction;
    this.movingPixelsRemaining = CELL_SIZE;
    console.log(
      "Initiating move:",
      direction,
      "Pixels remaining:",
      this.movingPixelsRemaining
    );
  }

  updateMovementProgress() {
    if (this.movingPixelsRemaining <= 0) {
      console.log("Movement completed");
      return; // No movement to process
    }
    this.movingPixelsRemaining -= this.travelPixelsPerFrame;
    console.log("Updating movement progress:", this.movingPixelsRemaining);
    if (this.movingPixelsRemaining <= 0) {
      this.movingPixelsRemaining = 0; // Ensure we don't go negative
      this.onDoneMoving();
    }
  }

  onDoneMoving() {
    const { x, y } = directionUpdateMap[this.movingPixelDirection];
    console.log(
      "directionUpdateMap[this.movingPixelDirection]",
      directionUpdateMap[this.movingPixelDirection]
    );
    this.x += x;
    this.y += y;
    this.handlePossibleCollisions();
    console.log("Moved to", this.x, this.y);
  }

  handlePossibleCollisions() {
    // Implement collision logic or trigger events here
  }
}
