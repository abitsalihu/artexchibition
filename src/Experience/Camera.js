import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Experience from "./Experience";

export default class Camera {
  constructor() {
    this.experience = new Experience();

    this.canvas = this.experience.canvas;

    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;

    this.setUpPerspectiveCamera();
    this.setUpOrbitControls();
  }

  setUpPerspectiveCamera() {
    this.instance = new THREE.PerspectiveCamera(
      75,
      this.sizes.width / this.sizes.height,
      0.01,
      100
    );
    this.instance.position.set(0, 0, 3);
    this.scene.add(this.instance);
  }

  setUpOrbitControls() {
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.enableDamping = true;
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }
  update() {
    this.controls.update();
  }
}
