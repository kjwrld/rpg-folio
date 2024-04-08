import React, { useEffect, useRef } from "react";

function LevelBackgroundLayer({ level, background }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const gameScreen = canvas.parentElement;

    // Set the canvas size to match the parent (.gameScreen) size
    const width = gameScreen.offsetWidth;
    const height = gameScreen.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    // Load and draw the background image
    const backgroundImage = new Image();
    backgroundImage.onload = function () {
      // Draw the image on the canvas scaled to fit
      ctx.drawImage(
        backgroundImage,
        -(width / 2),
        -(height / 2),
        width * 2,
        height * 2
      );
    };
    backgroundImage.src = background;
  }, [background]);

  return (
    <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />
  );
}

export default LevelBackgroundLayer;
