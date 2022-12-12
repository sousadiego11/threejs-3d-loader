import * as THREE from 'three';

export function makeRenderer() {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor('#000', 0.1);

    renderer.outputEncoding =  THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ReinhardToneMapping

    return renderer;
}
