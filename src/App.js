import { useEffect, useState } from "react";
import RenderLayer from "./components/level-layout/RenderLevel.js";

import {
  SPRITE_SHEET_SRC,
  THEME_BACKGROUNDS,
  BACKGROUND_SHEET_SRC,
} from "./helpers/constants.js";

const office_level = {
  id: "office",
  theme: THEME_BACKGROUNDS["office"],
  background: BACKGROUND_SHEET_SRC,
  placements: [
    { id: "mona", x: 8, y: 2.5 },
    { id: "blueprint", x: -0.5, y: 1.25 },
    { id: "desk", x: -1.5, y: 3 },
    { id: "computer", x: -1.5, y: 2.5 },
    { id: "seat", x: 0, y: 4.5 },
  ],
  hero: [{ id: "dl", x: 4, y: 1 }],
};

function App() {
  const [spriteSheet, setSpriteSheet] = useState(null);

  useEffect(() => {
    /** @type {HTMLImageElement} */
    const sheet = new Image();
    sheet.src = SPRITE_SHEET_SRC;
    sheet.onload = () => {
      setSpriteSheet(sheet);
    };
  }, []);

  if (!spriteSheet) {
    return null;
  }

  return (
    <RenderLayer
      level={office_level}
      spriteSheet={spriteSheet}
      background={office_level.background}
    />
  );
}

export default App;
