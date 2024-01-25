import { useEffect, useState } from "react";
import { SPRITE_SHEET_SRC, BACKGROUND_SHEET_SRC } from "./helpers/constants.js";
import RenderLayer from "./components/level-layout/RenderLevel.js";

function App() {
  const [spriteSheet, setSpriteSheet] = useState(null);

  useEffect(() => {
    /** @type {HTMLImageElement} */
    const sheet = new Image();
    const level = new Image();
    sheet.src = SPRITE_SHEET_SRC;
    level.src = BACKGROUND_SHEET_SRC;
    sheet.onload = () => {
      setSpriteSheet(sheet);
    };
  }, []);

  if (!spriteSheet) {
    return null;
  }

  console.log(spriteSheet);

  return <RenderLayer spriteSheet={spriteSheet} />;
}

export default App;
