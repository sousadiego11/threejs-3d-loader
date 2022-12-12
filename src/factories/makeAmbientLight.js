import * as THREE from 'three';

export function makeAmbientLight() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true
    
    return ambientLight;
}
