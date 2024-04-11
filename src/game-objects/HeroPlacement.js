import Placement from "./Placement";
import { HERO } from "../helpers/constants"; // Assuming HERO is defined in constants

export class HeroPlacement extends Placement {
  constructor(props) {
    super(props);
  }

  static createPlacement(p) {
    const heroConfig = HERO[p.id];
    if (!heroConfig) {
      console.error(`Hero "${p.id}" not found.`);
      return null;
    }

    return new HeroPlacement({
      ...p,
      ...heroConfig,
    });
  }
}
