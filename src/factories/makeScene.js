import * as THREE from 'three';
import { makeDirectionalLight, makeAmbientLight } from "./";

export function makeScene() {
    const ambientLight = makeAmbientLight();
    const directionalLight = makeDirectionalLight();
    const scene = new THREE.Scene();
    // const axesHelper = new THREE.AxesHelper( 5 );

    scene.add(directionalLight);
    // scene.add( axesHelper );
    scene.add(ambientLight);
    scene.castShadow = true
    return scene;
}
