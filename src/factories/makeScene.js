import * as THREE from 'three';

export function makeScene() {
    const dirLight = new THREE.DirectionalLight( 0xffffff, 3 );
    const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 2 );

    const scene = new THREE.Scene();

    const geometry = new THREE.PlaneGeometry( 1000, 1000 );
    const material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
    const plane = new THREE.Mesh( geometry, material );

    dirLight.position.z = 1
    dirLight.position.x = 1
    dirLight.castShadow = true;

    hemiLight.castShadow = true
    hemiLight.color.setHSL( 0.6, 1, 0.6 );
    hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
    hemiLight.position.set( 0, 50, 0 );

    material.color.setHSL( 0.095, 1, 0.75 );
    plane.position.y = -2
    plane.rotation.x = -90 * Math.PI / 180
    plane.receiveShadow = true;
    
    scene.add(hemiLight);
    scene.add(dirLight);
    scene.add( plane );
    scene.background = new THREE.Color().setHSL( 0.6, 0, 1 );
    scene.fog = new THREE.Fog( scene.background, 1, 500 );

    return scene;
}
