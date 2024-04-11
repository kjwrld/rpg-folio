export default class Placement {
  constructor(props, level) {
    this.type = props.type;
    this.x = props.x;
    this.y = props.y;
    this.level = level;
  }

  renderComponent() {
    return null;
  }
}

// { id: "DL-002", x: 4, y: 1, frameCoord: "0x10", size: 32 }
