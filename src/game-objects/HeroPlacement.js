import Placement from "./Placement";
import { HERO } from "../game-objects/objects";
import Hero from "../components/object-graphics/Hero";
import { CELL_SIZE, directionUpdateMap } from "../helpers/constants";

export class HeroPlacement extends Placement {
  constructor(properties) {
    super(properties);
    this.frameIndex = 0; // Index to track the current frame of the animation
    this.frameMax = HERO.MOTION[this.movingPixelDirection].length;
    this.frameDelay = 1; // Number of ticks to wait before changing frames
    this.frameDelayCounter = 0; // Counter to track ticks
  }

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
    const { frameCoord, reverse } = this.getFrame();
    return <Hero frameCoord={frameCoord} reverse={reverse} />;
  }

  tick() {
    if (this.isMoving) {
      this.updateMovementProgress();
    }
    this.updateAnimationFrame();
  }

  getFrame() {
    let frames = this.isMoving
      ? HERO.MOTION[this.movingPixelDirection]
      : [HERO.STANDING[this.movingPixelDirection][0]];
    let frameData = frames[this.frameIndex % frames.length];
    return {
      frameCoord: frameData.frameCoord,
      reverse: frameData.reverse || false,
    };
  }

  controllerMoveRequest(direction) {
    if (this.movingPixelsRemaining > 0) {
      return;
    }
    this.movingPixelDirection = direction;
    this.isMoving = true;
    this.movingPixelsRemaining = CELL_SIZE;
    this.frameIndex = 0; // Reset frame index on direction change
  }

  updateMovementProgress() {
    if (this.movingPixelsRemaining <= 0) {
      this.isMoving = false;
      this.frameIndex = 0; // Reset to standing frame when not moving
      return;
    }
    this.movingPixelsRemaining -= this.travelPixelsPerFrame;
    if (this.movingPixelsRemaining <= 0) {
      this.movingPixelsRemaining = 0;
      this.onDoneMoving();
    }
  }

  updateAnimationFrame() {
    if (this.isMoving || this.frameIndex === 0) {
      if (this.frameDelayCounter >= this.frameDelay) {
        this.frameIndex++;
        this.frameDelayCounter = 0; // Reset the counter
      } else {
        this.frameDelayCounter++; // Increment the counter
      }
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
