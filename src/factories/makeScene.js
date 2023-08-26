import * as THREE from 'three';

export function makeScene() {
    const dirLight = new THREE.DirectionalLight( 0xffffff, 3 );
    dirLight.shadow.camera.left = -200;
    dirLight.shadow.camera.right = 200;
    dirLight.shadow.camera.top = 200;
    dirLight.shadow.camera.bottom = -200;
    dirLight.shadow.mapSize.x = 50000
    dirLight.shadow.mapSize.y = 50000

    const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 2 );
    
    const scene = new THREE.Scene();
    
    const planeGeo = new THREE.PlaneGeometry( 1000, 1000 );
    const planeMat = new THREE.MeshLambertMaterial( { color: 0xffffff } );
    const planeMesh = new THREE.Mesh( planeGeo, planeMat );
    
    dirLight.position.set(100,100,100)
    dirLight.castShadow = true;

    hemiLight.color.setHSL( 0.6, 1, 0.6 );
    hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
    hemiLight.position.set( 0, 50, 0 );
    
    planeMat.color.setHSL( 0.095, 1, 0.75 );
    planeMesh.position.y = -2
    planeMesh.rotation.x = -90 * Math.PI / 180
    planeMesh.receiveShadow = true;
    
    scene.add(hemiLight);
    scene.add(dirLight);
    scene.add(planeMesh);
    scene.fog = new THREE.Fog( 0xffffff, 1, 500 );

    return scene;
}
