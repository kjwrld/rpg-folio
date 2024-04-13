import Sprite from "./Sprite";
import styles from "./Hero.module.css";

export default function Hero({ frameCoord, reverse }) {
  return (
    <div className={styles.hero}>
      <div className={styles.heroBody}>
        <Sprite frameCoord={frameCoord} reverse={reverse} size={32} />
      </div>
    </div>
  );
}
