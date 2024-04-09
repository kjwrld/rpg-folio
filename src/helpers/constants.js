export const CELL_SIZE = 16;
export const SPRITE_SHEET_SRC = "./kj-0001-v2.png";
export const BACKGROUND_SHEET_SRC = "../background.png";

export const LEVEL_THEMES = {
  bedroom: "bedroom",
  office: "office",
};

export const THEME_BACKGROUNDS = {
  [LEVEL_THEMES.bedroom]: "#2f2808",
  [LEVEL_THEMES.office]: "#f2f2f2",
};

export const THEME_MAP = {
  [LEVEL_THEMES.office]: {
    FLOOR: "1x1",
    TOP: "1x0",
    LEFT: "0x1",
    RIGHT: "2x1",
    BOTTOM: "1x2",
    WALL: "0x2",
  },
};
