import Sprite from "./Sprite";
import styles from "./Hero.module.css";
import { HERO } from "../../game-objects/objects";
import { DIRECTION } from "../../helpers/constants";

export default function Hero({ direction }) {
  const frame = HERO.STANDING[direction];
  if (frame) {
    console.log(frame);
    console.log("inside Hero", HERO.STANDING[direction]);
    console.log(
      "HERO.STANDING[direction][0].frameCoord",
      HERO.STANDING[direction][0].frameCoord
    );
  }
  return (
    <div className={styles.hero}>
      <div className={styles.heroBody}>
        <Sprite frameCoord={HERO.STANDING[direction][0].frameCoord} size={32} />
      </div>
    </div>
  );
}
