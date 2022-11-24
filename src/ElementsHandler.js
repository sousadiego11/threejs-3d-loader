import { makeObjectLoader } from './factories';
import { sceneHandler } from './SceneHandler';

export class ElementsHandler {
    #inputUpload
    #rotate

    constructor() {
        this.inputUpload = document.querySelector('.upload');
        this.rotate = document.querySelector('.rotate');
    }

    
    #addUploadEvent() {
        this.inputUpload.addEventListener('change', () => {
            const objectLoader = makeObjectLoader(this.inputUpload.files);
            objectLoader.load();
        });

        return this;
    }
    
    #addRotateEvent() {
        this.rotate.addEventListener('click', () => {
            sceneHandler.orbitControls.autoRotate = !sceneHandler.orbitControls.autoRotate;
        });
        
        return this;
    }

    addEvents() {
        this.#addRotateEvent()
        this.#addUploadEvent()
    }
}
