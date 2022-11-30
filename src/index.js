import { makeRouter } from './factories';
import { sceneHandler } from './singletons';
import "./public/style.css"

makeRouter().listen()

function animate() {
    requestAnimationFrame( animate );
	sceneHandler.renderer.render( sceneHandler.scene, sceneHandler.camera );
    sceneHandler.orbitControls.update();
}

animate()