import Placement from "./Placement";
import { HERO } from "../game-objects/objects";
import Hero from "../components/object-graphics/Hero";

export class HeroPlacement extends Placement {
  constructor(props) {
    super(props);
  }

  static createPlacement(p) {
    const heroConfig = HERO[p[0].id];
    if (!heroConfig) {
      console.error(`Hero "${p[0].id}" not found.`);
      return null;
    }

    return new HeroPlacement({
      ...p[0],
      ...heroConfig[0],
    });
  }

  renderComponent() {
    return <Hero />;
  }

  tick() {}
}
