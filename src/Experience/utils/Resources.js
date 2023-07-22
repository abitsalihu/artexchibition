import EventEmitter from "/Experience/utils/EventEmitter.js";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default class Resources extends EventEmitter {
  constructor(sources) {
    super();

    this.sources = sources;
    console.log(this.sources);

    this.items = [];
    this.itemsToLoad = this.sources.length;
    this.itemsLoaded = 0;

    this.setUpLoaders();

    this.startLoading();
  }

  setUpLoaders() {
    this.gtlfLoader = new GLTFLoader();
    this.textureLoader = new THREE.TextureLoader();
    this.envMapLoader = new THREE.CubeTextureLoader();
  }

  startLoading() {
    for (const source of this.sources) {
      if (source.type === "gltfLoader") {
        this.gtlfLoader.load(source.url, (file) => {
          this.loadedItem(source.name, file);
        });
      }
      if (source.type === "textureLoader") {
        this.textureLoader.load(source.url, (file) => {
          this.loadedItem(source.name, file);
        });
      }

      if (source.type === "envTexture") {
        this.envMapLoader.load(source.url, (file) => {
          this.loadedItem(source.name, file);
        });
      }
    }
  }

  loadedItem(name, file) {
    this.items[name] = file;
    this.itemsLoaded++;

    if (this.itemsLoaded === this.itemsToLoad) {
      console.log(this.items.length);
      this.trigger("ready");
    }
  }
}
