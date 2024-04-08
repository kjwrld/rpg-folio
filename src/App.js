import { useEffect, useState } from "react";
import { SPRITE_SHEET_SRC } from "./helpers/constants.js";
import RenderLayer from "./components/level-layout/RenderLevel.js";
import { BACKGROUND_SHEET_SRC } from "./helpers/constants.js";

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
    <RenderLayer spriteSheet={spriteSheet} background={BACKGROUND_SHEET_SRC} />
  );
}

export default App;
