export class GameLoop {
  constructor(onStep) {
    this.onStep = onStep;
    this.rafCallback = null;
    this.previousMs = 0;
    this.start();
  }

  start() {
    const step = 1 / 60;
    const tick = (timestampMs) => {
      if (!this.previousMs) this.previousMs = timestampMs;
      let delta = (timestampMs - this.previousMs) / 1000;

      // clamping at 0.1 seconds prevents spiral of death
      delta = Math.min(delta, 0.1);

      while (delta >= step) {
        this.onStep(step);
        delta -= step;
      }

      this.previousMs = timestampMs;
      this.rafCallback = requestAnimationFrame(tick);
    };

    this.rafCallback = requestAnimationFrame(tick);
  }

  stop() {
    cancelAnimationFrame(this.rafCallback);
  }
}
