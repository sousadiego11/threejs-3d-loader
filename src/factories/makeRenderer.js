import * as THREE from 'three';

export function makeRenderer() {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor('#fff', 0.9);

    renderer.outputEncoding =  THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ReinhardToneMapping

    return renderer;
}
