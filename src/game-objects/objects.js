export const HERO = {
  STANDING: {
    UP: [{ frameCoord: "4x0", size: 32, active: true }],
    UPRIGHT: [{ frameCoord: "4x4", size: 32, active: true }],
    RIGHT: [{ frameCoord: "2x4", size: 32, active: true }],
    DOWNRIGHT: [{ frameCoord: "2x4", size: 32, active: true }],
    DOWN: [{ frameCoord: "0x0", size: 32, active: true }],
    DOWNLEFT: [{ frameCoord: "0x2", size: 32, active: true }],
    LEFT: [{ frameCoord: "2x2", size: 32, active: true }],
    UPLEFT: [{ frameCoord: "4x2", size: 32, active: true }],
  },
  DOWN_LEFT: [{ frameCoord: "0x10", size: 32, active: true }],
};
// { id: "DL-002", x: 4, y: 1, frameCoord: "0x10", size: 32 },

export const GAME_OBJECTS = {
  seat: [{ frameCoord: "6x5", size: 32, active: false }],
  desk: [
    { frameCoord: "6x0", size: 48, active: false },
    { frameCoord: "8x0", size: 48, active: false },
  ],
  computer: [
    { frameCoord: "6x3", size: 32, active: false },
    { frameCoord: "8x3", size: 32, active: true },
    { frameCoord: "10x3", size: 32, active: false },
  ],
  blueprint: [
    { frameCoord: "8x5", size: 32, active: false },
    { frameCoord: "9x5", size: 32, active: false },
  ],
  mona: [{ frameCoord: "2x0", size: 32, active: true }],
};
