import LevelBackgroundLayer from "./LevelBackgroundLayer";
import LevelPlacementsLayer from "./LevelPlacementsLayer";
import { THEME_BACKGROUNDS } from "../../helpers/constants";
import styles from "./RenderLevel.module.css";

export default function RenderLayer({ spriteSheet, background }) {
  const level = {
    theme: "office",
    placements: [
      // Level 0
      { id: "mona", x: -1.5, y: 2.5, frameCoord: "2x0", size: 32 },
      { id: "DL-002", x: 4, y: 1, frameCoord: "0x10", size: 32 },
    ],
  };
  return (
    <div
      className={styles.fullScreenContainer}
      style={{ background: THEME_BACKGROUNDS[level.theme] }}
    >
      <div className={styles.gameScreen}>
        <LevelBackgroundLayer level={level} background={background} />
        <LevelPlacementsLayer level={level} spriteSheet={spriteSheet} />
      </div>
    </div>
  );
}
