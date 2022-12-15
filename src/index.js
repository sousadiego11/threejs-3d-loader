import { makeRouter } from './factories';
import { sceneHandler } from './singletons';
import "./public/style.css"

makeRouter().listen()

window.onresize = function () {
    sceneHandler.camera.aspect = window.innerWidth / window.innerHeight;
    sceneHandler.camera.updateProjectionMatrix();
    sceneHandler.renderer.setSize( window.innerWidth, window.innerHeight );

};

function animate() {
    requestAnimationFrame( animate );
	sceneHandler.renderer.render( sceneHandler.scene, sceneHandler.camera );
    sceneHandler.orbitControls.update();
}

animate()