import { makeObjectLoader } from './factories';
import { sceneHandler } from './SceneHandler';

const inputUpload = document.querySelector('.upload')

inputUpload.addEventListener('change', () => {
    const objectLoader = makeObjectLoader(inputUpload.files)
    objectLoader.load()
})

function animate() {
    requestAnimationFrame( animate );
	sceneHandler.renderer.render( sceneHandler.scene, sceneHandler.camera );
    sceneHandler.orbitControls.update();
}

animate()