import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function makeOrbitControls(camera, renderer) {
    const orbitControls = new OrbitControls(camera, renderer.domElement);

    return orbitControls;
}
