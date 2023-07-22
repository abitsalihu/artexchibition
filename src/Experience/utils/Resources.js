import EventEmitter from "/Experience/utils/EventEmitter.js";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default class Resources extends EventEmitter {
  constructor(sources) {
    super();

    this.sources = sources;
    console.log(this.sources);

    this.items = null;
    this.itemsToLoad = sources.length;
    this.itemsLoaded = 0;

    this.setUpLoaders();
  }

  setUpLoaders() {
    this.gtlfLoader = new GLTFLoader();
    this.textureLoader = new THREE.TextureLoader();
    this.envMapLoader = new THREE.CubeTextureLoader();
  }

  startLoading() {
    for (const course of this.sources) {
    }
  }

  loadedItem() {}
}
