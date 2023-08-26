import { Group } from "three";
import { makeObjectLoader } from "../factories";
import { sceneHandler } from "../singletons";

function position(model: Group) {
    const x = Math.random() * (0 - 5) + 5
    const z = Math.random() * (0 - 5) + 5
    model.position.set(x,-2,z);
    model.rotateY(89.5)
}

function scale(model: Group) {
    model.scale.set(0.1, 0.1, 0.1)
}

function resizer() {
    sceneHandler.camera.aspect = window.innerWidth / window.innerHeight;
    sceneHandler.camera.updateProjectionMatrix();
    sceneHandler.renderer.setSize( window.innerWidth, window.innerHeight );

};

function animate() {
    requestAnimationFrame( animate );
	sceneHandler.renderer.render( sceneHandler.scene, sceneHandler.camera );
    sceneHandler.orbitControls.update();
}

function upload(client: string, files?: FileList ){
    if (files) {
        const objectLoader = makeObjectLoader(files);
        objectLoader.load();
    
        // FileUtil.uploadFiles(Array.from(Object.values(files)), client)
    }
}

function rotate(){
    sceneHandler.orbitControls.autoRotate = !sceneHandler.orbitControls.autoRotate
}

export {
    animate,
    position,
    resizer,
    rotate,
    upload,
    scale
}