import * as THREE from 'three';
import { makeDirectionalLight, makeAmbientLight } from "./";

export function makeScene() {
    const ambientLight = makeAmbientLight();
    const directionalLight = makeDirectionalLight();
    const scene = new THREE.Scene();

    scene.add(directionalLight);
    scene.add(ambientLight);
    scene.castShadow = true
    return scene;
}
