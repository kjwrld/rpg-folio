import { CELL_SIZE, DIRECTION } from "../helpers/constants";
import { GAME_OBJECTS } from "./objects";
import { Sprite } from "../components/object-graphics/Sprite";

export default class Placement {
  constructor({ id, x, y, frameCoord, size, active = null }) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.frameCoord = frameCoord;
    this.size = size;
    this.active = active; // might use this to distinguish interactive objects

    this.travelPixelsPerFrame = 4;
    this.movingPixelsRemaining = 0;
    this.movingPixelDirection = DIRECTION.DOWN;
  }

  static createPlacement(p) {
    const objectConfig = GAME_OBJECTS[p.id];
    if (!objectConfig) {
      if (p.frameCoord) {
        return new Placement(p);
      }
      console.error(`GameObject "${p.id}" not found.`);
      return null;
    }

    const baseX = Placement.parseFrameCoord(objectConfig[0].frameCoord).x;

    return objectConfig.map((obj, index) => {
      const { x: objX } = Placement.parseFrameCoord(obj.frameCoord);
      const xOffset = objX - baseX;
      const newX = p.x + xOffset;

      return new Placement({
        ...obj,
        id: `${p.id}_${index}`,
        x: newX,
        y: p.y,
      });
    });
  }

  static parseFrameCoord(frameCoord) {
    const [x, y] = frameCoord.split("x").map(Number);
    return { x, y };
  }

  renderComponent(spriteSheet = null) {
    return (
      <Sprite
        sheet={spriteSheet}
        frameCoord={this.frameCoord}
        size={this.size}
      />
    );
  }

  // Calculates the current position of the placement, accounting for any movement
  calculatePosition() {
    if (this.movingPixelsRemaining > 0) {
      return this.calculateMovingPosition();
    }
    return [this.x * CELL_SIZE, this.y * CELL_SIZE];
  }

  // Calculates the position during movement based on the remaining pixels and direction
  calculateMovingPosition() {
    const directionVectors = {
      UP: { dx: 0, dy: -1 },
      UP_RIGHT: { dx: 1, dy: -1 },
      RIGHT: { dx: 1, dy: 0 },
      DOWN_RIGHT: { dx: 1, dy: 1 },
      DOWN: { dx: 0, dy: 1 },
      DOWN_LEFT: { dx: -1, dy: 1 },
      LEFT: { dx: -1, dy: 0 },
      UP_LEFT: { dx: -1, dy: -1 },
    };

    const x = this.x * CELL_SIZE;
    const y = this.y * CELL_SIZE;
    const progressPixels = CELL_SIZE - this.movingPixelsRemaining;

    // Get the directional vector for the current movement direction
    const vector = directionVectors[this.movingPixelDirection] || {
      dx: 0,
      dy: 0,
    };

    // Calculate new position based on the direction vector and progress pixels
    const newX = x + vector.dx * progressPixels;
    const newY = y + vector.dy * progressPixels;

    return [newX, newY];
  }

  tick() {}
}
