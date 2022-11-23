import * as THREE from 'three';
import { makeDirectionalLight, makeAmbientLight } from "./";

export function makeScene() {
    const ambientLight = makeAmbientLight();
    const directionalLight = makeDirectionalLight();
    const scene = new THREE.Scene();

    scene.add(ambientLight);
    scene.add(directionalLight);

    return scene;
}
