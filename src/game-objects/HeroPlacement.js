import { Sprite } from "../components/object-graphics/Sprite";
import Placement from "./Placement";
import { SPRITE_SHEET_SRC } from "../helpers/constants";

export class HeroPlacement extends Placement {
  renderComponent() {
    return (
      <Sprite
        image={SPRITE_SHEET_SRC}
        frameCoord={placement.frameCoord}
        size={placement.size}
      />
    );
  }
}
