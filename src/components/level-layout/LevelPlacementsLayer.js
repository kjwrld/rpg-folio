import { CELL_SIZE } from "../../helpers/constants";
import Sprite from "../object-graphics/Sprite";

export default function LevelPlacementsLayer({ level, image }) {
  // Ensure placements is an array
  if (!Array.isArray(level.placements)) {
    console.error("placements is not an array");
    return null;
  }

  return level.placements.map((placement) => {
    const x = placement.x * CELL_SIZE + "px";
    const y = placement.x * CELL_SIZE + "px";
    const style = {
      position: "absolute",
      transform: `translate3d(${x}, ${y}, 0)`,
    };

    return (
      <div key={placement.id} style={style}>
        <Sprite
          image={image}
          frameCoord={placement.frameCoord}
          size={placement.size}
        />
      </div>
    );
  });
}
