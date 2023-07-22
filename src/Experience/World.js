import * as THREE from "three";
import Experience from "./Experience";

export default class World {
  constructor() {
    this.experience = new Experience();

    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.resources.on("ready", () => {
      this.items = this.resources.items;

      this.museumScene = this.resources.items.museumScene;
      this.bench = this.resources.items.benchModel;

      this.finalBakedScene = this.items.finalBakedScene;
      this.benchTexture = this.items.benchTexture;

      //? TEXTURE FLIP Y
      this.finalBakedScene.flipY = false;
      this.benchTexture.flipY = false;

      //? TEXTURE OUTPUTENCODING

      this.finalBakedScene.outputColorSpace = THREE.SRGBColorSpace;

      this.benchTexture.outputColorSpace = THREE.SRGBColorSpace;

      this.museumScene.scene.children[0].material = new THREE.MeshBasicMaterial(
        { map: this.finalBakedScene }
      );

      this.bench.scene.children[0].material = new THREE.MeshBasicMaterial({
        map: this.benchTexture,
      });

      this.scene.add(this.museumScene.scene, this.bench.scene);
    });
  }
}
