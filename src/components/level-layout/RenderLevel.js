import LevelBackgroundLayer from "./LevelBackgroundLayer";
import LevelPlacementsLayer from "./LevelPlacementsLayer";
import { THEME_BACKGROUNDS } from "../../helpers/constants";
import styles from "./RenderLevel.module.css";

export default function RenderLayer({ spriteSheet, background }) {
  const level = {
    id: "office",
    theme: "office",
    background: background,
    placements: [
      { id: "mona", x: 8, y: 2.5, frameCoord: "2x0", size: 32 },
      { id: "DL-002", x: 4, y: 1, frameCoord: "0x10", size: 32 },
      { id: "blueprint", x: -0.5, y: 1.25, frameCoord: "8x5", size: 32 },
      { id: "blueprint2", x: 0.5, y: 1.25, frameCoord: "9x5", size: 32 },
      { id: "desk", x: -1.5, y: 3, frameCoord: "6x0", size: 48 },
      { id: "desk2", x: 0.5, y: 3, frameCoord: "8x0", size: 48 },
      { id: "computer", x: -1.5, y: 2.5, frameCoord: "6x3", size: 32 },
      { id: "computer2", x: 0.5, y: 2.5, frameCoord: "8x3", size: 32 },
      { id: "computer3", x: 2.5, y: 2.5, frameCoord: "10x3", size: 32 },
      { id: "seat", x: 0, y: 4.5, frameCoord: "6x5", size: 32 },
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
