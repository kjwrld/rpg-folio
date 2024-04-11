import React, { useEffect, useRef } from "react";

function LevelBackgroundLayer({ level, background }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const backgroundImage = new Image();
    backgroundImage.onload = function () {
      // Resize the canvas to the size of the image
      canvas.width = backgroundImage.naturalWidth;
      canvas.height = backgroundImage.naturalHeight;
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    };
    backgroundImage.src = background;
  }, [background]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}

export default LevelBackgroundLayer;
