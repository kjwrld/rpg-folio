import Sprite from "../object-graphics/Sprite";
import styles from "./RenderLevel.module.css";

export default function RenderLayer({ spriteSheet }) {
  const level = {
    placements: [
      { id: "DL-001", x: 0, y: 1, frameCoord: "0x10" },
      { id: "DL-002", x: 2, y: 1, frameCoord: "0x10" },
    ],
  };
  return (
    <div className={styles.fullScreenContainer}>
      <div className={styles.gameScreen}>
        <Sprite image={spriteSheet} frameCoord={"2x0"} />

        <Sprite image={spriteSheet} frameCoord={"0x10"} />
        <Sprite image={spriteSheet} frameCoord={"2x10"} />
        <Sprite image={spriteSheet} frameCoord={"4x10"} />
        <Sprite image={spriteSheet} frameCoord={"0x12"} />
        <Sprite image={spriteSheet} frameCoord={"2x12"} />
        <Sprite image={spriteSheet} frameCoord={"4x12"} />
        {/* <Sprite image={spriteSheet} frameCoord={"0x0"} />
        <Sprite image={spriteSheet} frameCoord={"4x0"} />

        <Sprite image={spriteSheet} frameCoord={"0x2"} />
        <Sprite image={spriteSheet} frameCoord={"2x2"} />
        <Sprite image={spriteSheet} frameCoord={"4x2"} />

        <Sprite image={spriteSheet} frameCoord={"0x4"} />
        <Sprite image={spriteSheet} frameCoord={"2x4"} />
        <Sprite image={spriteSheet} frameCoord={"4x4"} />

        <Sprite image={spriteSheet} frameCoord={"0x6"} />
        <Sprite image={spriteSheet} frameCoord={"2x6"} />
        <Sprite image={spriteSheet} frameCoord={"4x6"} />

        <Sprite image={spriteSheet} frameCoord={"0x8"} />
        <Sprite image={spriteSheet} frameCoord={"2x8"} />
        <Sprite image={spriteSheet} frameCoord={"4x8"} />

        <Sprite image={spriteSheet} frameCoord={"0x10"} />
        <Sprite image={spriteSheet} frameCoord={"2x10"} />
        <Sprite image={spriteSheet} frameCoord={"4x10"} />

        <Sprite image={spriteSheet} frameCoord={"0x12"} />
        <Sprite image={spriteSheet} frameCoord={"2x12"} />
        <Sprite image={spriteSheet} frameCoord={"4x12"} />
      */}
      </div>
    </div>
  );
}
