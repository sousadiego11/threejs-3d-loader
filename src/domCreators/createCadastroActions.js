import { sceneHandler } from "../SceneHandler";
import { makeObjectLoader } from '../factories';
import { FileUtil } from "../utils/FileUtil";

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

 function createUploadInput(container, hash) {
    const inputUpload = document.createElement('input');
    inputUpload.type = 'file';
    inputUpload.className = 'upload';
    inputUpload.multiple = true;

    container.appendChild(inputUpload);
    document.addEventListener('change', (e) => {
        if (e.target.className === 'upload') {
            const files = document.querySelector('.upload').files
            const objectLoader = makeObjectLoader(files);

            objectLoader.load();
            FileUtil.uploadFiles(Array.from(Object.values(files)), hash)
        }
    });
}

export function createCadastroActions(hash) {
    const container = document.querySelector('.actions');

    createUploadInput(container, hash);
    createRotateButton(container);
}
