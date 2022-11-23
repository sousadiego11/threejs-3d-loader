import { ObjectLoader } from './ObjectLoader';
import { Scene } from './Scene';

const sceneHandler = new Scene()
const objectLoader = new ObjectLoader(sceneHandler.scene)
const inputUpload = document.querySelector('.upload')

inputUpload.addEventListener('change', () => objectLoader.load(URL.createObjectURL(inputUpload.files[0])))

function animate() {
    requestAnimationFrame( animate );
	sceneHandler.renderer.render( sceneHandler.scene, sceneHandler.camera );
    sceneHandler.orbitControls.update();
    objectLoader.object.rotation.y += 0.01
}

animate()