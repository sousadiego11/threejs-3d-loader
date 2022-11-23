import { ObjectLoader } from './ObjectLoader';
import { Scene } from './Scene';

const sceneHandler = new Scene()
const objectLoader = new ObjectLoader(sceneHandler.scene)
const inputUpload = document.querySelector('.upload')

inputUpload.addEventListener('change', (evt) => {
    const objectUrl = URL.createObjectURL(inputUpload.files[0])
    objectLoader.load(objectUrl)
})

function animate() {
    requestAnimationFrame( animate );
	sceneHandler.renderer.render( sceneHandler.scene, sceneHandler.camera );
    sceneHandler.orbitControls.update();
}

animate()