import styles from "./RenderLevel.module.css";
import { useEffect, useState, useRef } from "react";
import LevelBackgroundLayer from "./LevelBackgroundLayer";
import LevelPlacementsLayer from "./LevelPlacementsLayer";
import { LevelState } from "../../classes/LevelState";

export default function RenderLayer({ level, spriteSheet, background }) {
  const [levelState, setLevelState] = useState(null);
  const levelStateRef = useRef();

  useEffect(() => {
    if (!levelStateRef.current) {
      levelStateRef.current = new LevelState(level, (newState) => {
        setLevelState(newState);
      });
      levelStateRef.current.initializeState(level.placements);
      setLevelState(levelStateRef.current.getState());
    }

    // TODO: listeners or game loop here for levelStateRef.current.moveObject

    return () => {
      levelStateRef.current.destroy();
    };
  }, [level]); // Dependency on external `level` prop to re-initialize if needed

  if (!levelState) {
    return null;
  }

  return (
    <div
      className={styles.fullScreenContainer}
      style={{ background: levelState.theme }}
    >
      <div className={styles.gameScreen}>
        <LevelBackgroundLayer
          level={levelState}
          background={levelState.background}
        />
        <LevelPlacementsLayer level={levelState} spriteSheet={spriteSheet} />
      </div>
    </div>
  );
}
