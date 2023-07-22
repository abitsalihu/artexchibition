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
    // this.setUpOrbitControls();

    document.addEventListener("click", (x) => {
      console.log(
        this.instance.position.x,
        this.instance.position.y,
        this.instance.position.z
      );
      console.log(
        this.instance.rotation.x,
        this.instance.rotation.y,
        this.instance.rotation.z
      );
    });
  }

  setUpPerspectiveCamera() {
    this.instance = new THREE.PerspectiveCamera(
      35,
      this.sizes.width / this.sizes.height,
      0.001,
      1000
    );
    this.instance.position.set(-1.6, 1.06, 6.76);
    this.instance.rotation.set(0.01, -0.01, 0.0);

    console.log(this.instance.position, this.instance.rotation);

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
    // this.controls.update();
  }
}
