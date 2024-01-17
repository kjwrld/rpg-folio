import { Sprite } from "./components/object-graphics/Sprite";
import { useEffect, useState } from "react";
import { SPRITE_SHEET_SRC, BACKGROUND_SHEET_SRC } from "./helpers/constants.js";

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

  console.log(spriteSheet);

  return (
    <div>
      <p>KJ</p>
      <Sprite image={spriteSheet} frameCoord={"1x0"} />
    </div>
  );
}

export default App;
