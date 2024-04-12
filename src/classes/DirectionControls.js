import { DIRECTION } from "../helpers/constants";

export class DirectionControls {
  constructor() {
    this.directionKeys = {
      ArrowDown: DIRECTION.DOWN,
      ArrowUp: DIRECTION.UP,
      ArrowLeft: DIRECTION.LEFT,
      ArrowRight: DIRECTION.RIGHT,
    };
    this.heldDirections = [];
    this.keyStates = {};

    document.addEventListener(
      "keydown",
      this.directionKeyDownHandler.bind(this)
    );
    document.addEventListener("keyup", this.directionKeyUpHandler.bind(this));
  }

  directionKeyDownHandler(e) {
    const dir = this.directionKeys[e.key];
    if (dir) {
      this.keyStates[e.key] = true;
      this.updateHeldDirections();
    }
  }

  directionKeyUpHandler(e) {
    const dir = this.directionKeys[e.key];
    if (dir) {
      delete this.keyStates[e.key];
      this.updateHeldDirections();
    }
  }

  updateHeldDirections() {
    this.heldDirections = []; // Clear current held directions
    if (this.keyStates["ArrowUp"] && this.keyStates["ArrowRight"]) {
      this.heldDirections.push(DIRECTION.UP_RIGHT);
    } else if (this.keyStates["ArrowUp"] && this.keyStates["ArrowLeft"]) {
      this.heldDirections.push(DIRECTION.UP_LEFT);
    } else if (this.keyStates["ArrowDown"] && this.keyStates["ArrowRight"]) {
      this.heldDirections.push(DIRECTION.DOWN_RIGHT);
    } else if (this.keyStates["ArrowDown"] && this.keyStates["ArrowLeft"]) {
      this.heldDirections.push(DIRECTION.DOWN_LEFT);
    }

    // Check for non-diagonal directions only if no diagonal direction is active
    if (this.heldDirections.length === 0) {
      if (this.keyStates["ArrowUp"]) {
        this.heldDirections.push(DIRECTION.UP);
      }
      if (this.keyStates["ArrowRight"]) {
        this.heldDirections.push(DIRECTION.RIGHT);
      }
      if (this.keyStates["ArrowDown"]) {
        this.heldDirections.push(DIRECTION.DOWN);
      }
      if (this.keyStates["ArrowLeft"]) {
        this.heldDirections.push(DIRECTION.LEFT);
      }
    }

    console.log(this.heldDirections);
  }

  get direction() {
    return this.heldDirections[0];
  }

  unbind() {
    document.removeEventListener("keydown", this.directionKeyDownHandler);
    document.removeEventListener("keyup", this.directionKeyUpHandler);
  }
}
