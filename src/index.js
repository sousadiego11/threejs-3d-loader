import { makeElementsHandler } from './factories';
import { sceneHandler } from './SceneHandler';

makeElementsHandler()
    .addEvents()

function animate() {
    requestAnimationFrame( animate );
	sceneHandler.renderer.render( sceneHandler.scene, sceneHandler.camera );
    sceneHandler.orbitControls.update();
}

animate()