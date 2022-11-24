import * as THREE from 'three';

export function makeDirectionalLight() {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(100, 100, 0);

    return directionalLight;
}
