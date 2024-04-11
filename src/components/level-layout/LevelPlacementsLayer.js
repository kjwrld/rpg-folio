import React from "react";
import { CELL_SIZE } from "../../helpers/constants";
import Sprite from "../object-graphics/Sprite";

export default function LevelPlacementsLayer({ level, spriteSheet }) {
  if (!Array.isArray(level.placements)) {
    console.error("placements is not an array");
    return null;
  }
  // Guard Rail
  const validPlacements = level.placements.filter((p) => p.frameCoord);

  return (
    <React.Fragment>
      {validPlacements.map((placement) => {
        const x = placement.x * CELL_SIZE + "px";
        const y = placement.y * CELL_SIZE + "px";
        const style = {
          position: "absolute",
          transform: `translate3d(${x}, ${y}, 0)`,
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
