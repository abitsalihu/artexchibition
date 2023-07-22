import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Experience from "./Experience";
import gsap from "gsap";

export default class Camera {
  constructor() {
    this.experience = new Experience();

    this.canvas = this.experience.canvas;
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;

    this.gui = this.experience.debug.gui;
    this.gsap = gsap;

    this.cameraFolder = this.gui.addFolder("camera");
    this.setUpPerspectiveCamera();
    // this.setUpOrbitControls();

    document.addEventListener("click", () => {
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

    // console.log(this.instance.position, this.instance.rotation);

    this.scene.add(this.instance);

    console.log(this.instance);
    this.folder = {
      camera: this.instance,
      gsap: this.gsap,
      fClick() {
        this.gsap.to(this.camera.position, {
          x: -1.4,
          y: 1.47,
          z: -2.7,
          duration: 3,
        });

        this.gsap.to(this.camera.rotation, {
          x: -3.02,
          y: 0.03,
          z: 3.13,
          duration: 3,
        });
      },

      sClick() {
        this.gsap.to(this.camera.position, {
          x: 0.52,
          y: 1.33,
          z: -2.0,
          duration: 3,
        });

        this.gsap.to(this.camera.rotation, {
          x: -1.45,
          y: 1.48,
          z: 1.45,
          duration: 3,
        });
      },
    };

    // console.log(thi);
    console.log(this.camera);

    console.log(this.folder);
    this.cameraFolder.add(this.folder, "fClick");
    this.cameraFolder.add(this.folder, "sClick");
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
