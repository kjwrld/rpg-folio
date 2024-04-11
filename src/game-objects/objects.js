export const HERO = {
  DL002: [{ frameCoord: "0x10", size: 32 }],
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
