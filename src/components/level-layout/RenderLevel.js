import styles from "./RenderLevel.module.css";
import { useEffect, useState, useRef } from "react";
import LevelBackgroundLayer from "./LevelBackgroundLayer";
import LevelPlacementsLayer from "./LevelPlacementsLayer";
import { LevelState } from "../../classes/LevelState";

export default function RenderLayer({ level, spriteSheet, background }) {
  const [levelState, setLevelState] = useState(null);
  const levelStateRef = useRef();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleBackgroundLoad = (width, height) => {
    if (levelStateRef.current) {
      levelStateRef.current.updateBackgroundSize(width, height);
      // Optionally update offset here if needed
      // updateOffset(levelStateRef.current.getState());
    }
  };

  useEffect(() => {
    if (!levelStateRef.current) {
      levelStateRef.current = new LevelState(level, (newState) => {
        setLevelState(newState);
        updateOffset(newState);
      });
      levelStateRef.current.initializeState(level.placements, level.hero);
      setLevelState(levelStateRef.current.getState());
    }

    function updateOffset(state) {
      if (state && state.hero) {
        const heroPos = state.hero.calculatePosition();
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        setOffset({
          x: centerX - heroPos[0],
          y: centerY - heroPos[1],
        });
      }
    }

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
      <div className={styles.gameScreenScaling}>
        <div
          className={styles.gameScreen}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
          }}
        >
          <LevelBackgroundLayer
            background={levelState.background}
            onLoad={handleBackgroundLoad}
          />
          <LevelPlacementsLayer level={levelState} spriteSheet={spriteSheet} />
        </div>
      </div>
    </div>
  );
}
