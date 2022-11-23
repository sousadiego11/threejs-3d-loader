import * as THREE from 'three';

export function makeAmbientLight() {
    return new THREE.AmbientLight(0xffffff, 0.4);
}
