import * as THREE from 'three';

export function makeRenderer() {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor('#000', 0.1);

    return renderer;
}
