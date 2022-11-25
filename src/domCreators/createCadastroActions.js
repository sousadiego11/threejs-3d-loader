import { sceneHandler } from "../SceneHandler";
import { makeObjectLoader } from '../factories';

function createRotateButton(container) {
    const rotateButton = document.createElement('button');
    rotateButton.className = 'rotate';
    rotateButton.innerText = 'Rotação automática';

    container.appendChild(rotateButton);
    document.addEventListener('click', (e) => {
        if (e.target.className === 'rotate') {
            sceneHandler.orbitControls.autoRotate = !sceneHandler.orbitControls.autoRotate;
        }
    });
}

 function createUploadInput(container) {
    const inputUpload = document.createElement('input');
    inputUpload.type = 'file';
    inputUpload.className = 'upload';
    inputUpload.multiple = true;

    container.appendChild(inputUpload);
    document.addEventListener('change', (e) => {
        if (e.target.className === 'upload') {
            const objectLoader = makeObjectLoader(document.querySelector('.upload').files);
            objectLoader.load();
        }
    });
}

export function createCadastroActions() {
    const container = document.querySelector('.actions');

    createUploadInput(container);
    createRotateButton(container);
}
