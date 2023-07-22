import EventEmitter from "/Experience/utils/EventEmitter.js";

export default class Sizes extends EventEmitter {
  constructor() {
    super();

    this.setSizes();
    window.addEventListener("resize", () => {
      this.trigger("resize");
      this.setSizes();
    });
  }

  setSizes() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(devicePixelRatio, 2);
  }
}
