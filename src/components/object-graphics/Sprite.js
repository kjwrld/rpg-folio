import React from "react";
import { useEffect, useRef } from "react";
import { CELL_SIZE } from "../../helpers/constants";
import { SPRITE_SHEET_SRC } from "../../helpers/constants";

export function Sprite({
  sheet = null,
  frameCoord,
  size = 16,
  reverse = false,
}) {
  const canvasRef = useRef();

  if (!sheet) {
    /** @type {HTMLImageElement} */
    sheet = new Image();
    sheet.src = SPRITE_SHEET_SRC;
  }

  useEffect(() => {
    /** @type {HTMLCanvasElement} */
    const canvasEl = canvasRef.current;
    const ctx = canvasEl.getContext("2d");

    // clear out canvas
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

    const [tileSheetX, tileSheetY] = frameCoord.split("x").map(Number);

    ctx.save();
    if (reverse) {
      ctx.scale(-1, 1); // Flip the context horizontally
      ctx.translate(-size, 0); // Move the context back into the visible canvas area
    }

    ctx.drawImage(
      sheet,
      tileSheetX * CELL_SIZE, // Left X corner of frame
      tileSheetY * CELL_SIZE, // Top Y corner of frame
      size, //How much to crop from the sprite sheet (X)
      size, //How much to crop from the sprite sheet (Y)
      0, //Where to place this on canvas tag X (0)
      0, //Where to place this on canvas tag Y (0)
      size, //How large to scale it (X)
      size //How large to scale it (Y)
    );

    ctx.restore();
  }, [sheet, frameCoord, size, reverse]);

  return <canvas width={size} height={size} ref={canvasRef} />;
}

const MemoizedSprite = React.memo(Sprite);
export default MemoizedSprite;
