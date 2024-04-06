import { CELL_SIZE, BACKGROUND_SHEET_SRC } from "../../helpers/constants";
import LevelBackgroundTilesLayer from "./LevelBackgroundTilesLayer";
import Sprite from "../object-graphics/Sprite";
import styles from "./RenderLevel.module.css";

export default function RenderLayer({ spriteSheet }) {
  const level = {
    // theme: "LEVEL_THEME.MYSTERY_DUNGEON",
    placements: [
      // Level 0
      { id: "mona", x: 2, y: 0, frameCoord: "2x0" },
      { id: "DL-002", x: 4, y: 1, frameCoord: "0x10" },
    ],
  };
  return (
    <div className={styles.fullScreenContainer}>
      {/* <Sprite image={spriteSheet} frameCoord={placement.frameCoord} /> */}
      <LevelBackgroundTilesLayer image={BACKGROUND_SHEET_SRC} />
      <div className={styles.gameScreen}>
        {level.placements.map((placement) => {
          const x = placement.x * CELL_SIZE + "px";
          const y = placement.x * CELL_SIZE + "px";
          const style = {
            position: "absolute",
            transform: `translate3d(${x}, ${y}, 0)`,
          };

          return (
            <div key={placement.id} style={style}>
              <Sprite image={spriteSheet} frameCoord={placement.frameCoord} />
            </div>
          );
        })}

        {/* KJ running DL
        <Sprite image={spriteSheet} frameCoord={"0x10"} />
        <Sprite image={spriteSheet} frameCoord={"2x10"} />
        <Sprite image={spriteSheet} frameCoord={"4x10"} />
        <Sprite image={spriteSheet} frameCoord={"0x12"} />
        <Sprite image={spriteSheet} frameCoord={"2x12"} />
        <Sprite image={spriteSheet} frameCoord={"4x12"} /> */}
      </div>
    </div>
  );
}
