import EventEmitter from "/Experience/utils/EventEmitter.js";

export default class Time extends EventEmitter {
  constructor() {
    super();

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  tick() {
    window.requestAnimationFrame(() => {
      this.trigger("update");
      this.tick();
    });
  }
}
