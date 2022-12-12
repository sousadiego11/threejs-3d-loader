import * as THREE from 'three';

export function makeDirectionalLight() {
    const hemiLight = new THREE.HemisphereLight(0xfcf3d9, 0x080820, 4);
    hemiLight.castShadow = true

    return hemiLight;
}
