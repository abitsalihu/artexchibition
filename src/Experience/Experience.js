import * as THREE from "three";
import Sizes from "./utils/Sizes";
import Time from "./utils/Time";
import Resources from "./utils/Resources";
import Camera from "./Camera";
import Renderer from "./Renderer";
import sources from "./sources.js";
import World from "./World";
import Debug from "./utils/Debug";

let instance = null;

export default class Experience {
  constructor(canvas) {
    this.canvas = canvas;

    if (instance) {
      return instance;
    } else {
      instance = this;
    }

    window.experience = this;
    //? utils
    this.debug = new Debug();
    this.sizes = new Sizes();
    this.time = new Time();
    this.resources = new Resources(sources);

    //?world
    this.scene = new THREE.Scene();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.world = new World();

    this.sizes.on("resize", () => {
      this.resize();
    });

    this.time.on("update", () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }
  update() {
    this.camera.update();
    this.renderer.update();
  }
}
