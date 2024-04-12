import React from "react";

export default function LevelPlacementsLayer({ level, spriteSheet }) {
  if (!Array.isArray(level.placements)) {
    console.error("placements is not an array");
    return null;
  }
  // Guard Rail
  const validPlacements = level.placements.filter((p) => p.frameCoord);
  const heroPlacement = level.hero;
  const allPlacements = [...validPlacements, heroPlacement];

  return (
    <React.Fragment>
      {allPlacements.map((placement) => {
        const [x, y] = placement.calculatePosition();
        const style = {
          position: "absolute",
          transform: `translate3d(${x}px, ${y}px, 0)`,
        };

        return (
          <div key={placement.id} style={style}>
            {placement.renderComponent(spriteSheet)}
          </div>
        );
      })}
    </React.Fragment>
  );
}
