import styles from "./RenderLevel.module.css";
import { useEffect, useState } from "react";
import LevelBackgroundLayer from "./LevelBackgroundLayer";
import LevelPlacementsLayer from "./LevelPlacementsLayer";
import { LevelState } from "../../classes/LevelState";

export default function RenderLayer({ level, spriteSheet, background }) {
  const [levelState, setLevelState] = useState(null);

  useEffect(() => {
    const levelCurrentState = new LevelState(level, (newState) => {
      setLevelState(levelCurrentState.getState());
    });
    return () => {
      levelCurrentState.destroy();
    };
  }, []);

  // if (!level) {
  //   return null;
  // }

  return (
    <div
      className={styles.fullScreenContainer}
      style={{ background: level.theme }}
    >
      <div className={styles.gameScreen}>
        <LevelBackgroundLayer level={level} background={level.background} />
        <LevelPlacementsLayer level={level} spriteSheet={spriteSheet} />
      </div>
    </div>
  );
}
