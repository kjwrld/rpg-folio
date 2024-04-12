export const CELL_SIZE = 16;
export const SPRITE_SHEET_SRC = "./kj-0001-v2.png";
export const BACKGROUND_SHEET_SRC = "../nature-office.png";

export const LEVEL_THEMES = {
  bedroom: "bedroom",
  office: "office",
};

export const THEME_BACKGROUNDS = {
  [LEVEL_THEMES.bedroom]: "#2f2808",
  [LEVEL_THEMES.office]: "#0D0D04",
};

export const DIRECTION = {
  UP: "UP",
  UP_RIGHT: "UPRIGHT",
  RIGHT: "RIGHT",
  DOWN_RIGHT: "DOWNRIGHT",
  DOWN: "DOWN",
  DOWN_LEFT: "DOWNLEFT",
  LEFT: "LEFT",
  UP_LEFT: "UPLEFT",
};

export const directionUpdateMap = {
  [DIRECTION.UP]: { x: 0, y: -1 },
  [DIRECTION.UP_RIGHT]: { x: 0.5, y: -0.5 },
  [DIRECTION.RIGHT]: { x: 1, y: 0 },
  [DIRECTION.DOWN_RIGHT]: { x: 0.5, y: 0.5 },
  [DIRECTION.DOWN]: { x: 0, y: 1 },
  [DIRECTION.DOWN_LEFT]: { x: -0.5, y: 0.5 },
  [DIRECTION.LEFT]: { x: -1, y: 0 },
  [DIRECTION.UP_LEFT]: { x: -0.5, y: -0.5 },
};

// export const THEME_MAP = {
//   [LEVEL_THEMES.office]: {
//     FLOOR: "1x1",
//     TOP: "1x0",
//     LEFT: "0x1",
//     RIGHT: "2x1",
//     BOTTOM: "1x2",
//     WALL: "0x2",
//   },
// };
