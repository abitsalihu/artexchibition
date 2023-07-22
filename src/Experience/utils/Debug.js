import EventEmitter from "./EventEmitter";
import * as lil from "lil-gui";

export default class Debug extends EventEmitter {
  constructor() {
    super();

    this.gui = new lil.GUI();
  }
}
