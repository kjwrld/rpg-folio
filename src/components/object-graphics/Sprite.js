import React from "react";
import { useEffect, useRef } from "react";
import { CELL_SIZE } from "../../helpers/constants";

export function Sprite({ image, frameCoord, size = 16 }) {
  const canvasRef = useRef();

  useEffect(() => {
    /** @type {HTMLCanvasElement} */
    const canvasEl = canvasRef.current;
    const ctx = canvasEl.getContext("2d");

    // clear out canvas stuff
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

    // coordinates
    const tileSheetX = Number(frameCoord.split("x")[0]);
    const tileSheetY = Number(frameCoord.split("x")[1]);

    console.log("is the image here?");
    console.log(image);

    ctx.drawImage(
      image, // Image to pull from
      tileSheetX * CELL_SIZE, // Left X corner of frame
      tileSheetY * CELL_SIZE, // Top Y corner of frame
      size, //How much to crop from the sprite sheet (X)
      size, //How much to crop from the sprite sheet (Y)
      0, //Where to place this on canvas tag X (0)
      0, //Where to place this on canvas tag Y (0)
      size, //How large to scale it (X)
      size //How large to scale it (Y)
    );
  }, [image, frameCoord, size]);

  return <canvas width={size} height={size} ref={canvasRef} />;
}

const MemoizedSprite = React.memo(Sprite);
export default MemoizedSprite;
