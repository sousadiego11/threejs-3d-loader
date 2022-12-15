import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';

export function makeOrbitControls(camera, renderer) {
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.target.set( 0,0.8, 0 );
    orbitControls.autoRotate = false
    orbitControls.mouseButtons.RIGHT = THREE.MOUSE.PAN
    orbitControls.mouseButtons.LEFT = THREE.MOUSE.ROTATE
    orbitControls.enableDamping = true

    return orbitControls;
}
