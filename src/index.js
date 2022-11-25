import { makeRouter } from './factories';
import { sceneHandler } from './SceneHandler';

makeRouter()
    .listen()

function animate() {
    requestAnimationFrame( animate );
	sceneHandler.renderer.render( sceneHandler.scene, sceneHandler.camera );
    sceneHandler.orbitControls.update();
}

animate()