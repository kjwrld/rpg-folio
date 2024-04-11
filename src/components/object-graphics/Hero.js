import Sprite from "./Sprite";
import styles from "./Hero.module.css";
import { HERO } from "../../game-objects/objects";

export default function Hero() {
  console.log("okay we here wassup");
  return (
    <div className={styles.hero}>
      <div className={styles.heroBody}>
        <Sprite frameCoord={HERO.DOWN_LEFT[0].frameCoord} size={32} />
      </div>
    </div>
  );
}
