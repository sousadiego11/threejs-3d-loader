import { sceneHandler } from "../SceneHandler";
import { makeObjectLoader } from '../factories';
import { FileUtil } from "../utils/FileUtil";
import { UrlUtil } from "../utils/UrlUtil";

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
}

 function createClientInput(container) {
    const clientInput = document.createElement('input');
    clientInput.type = 'text';
    clientInput.className = 'client';

    container.appendChild(clientInput);
}

 function createSendButton(container) {
    const rotateButton = document.createElement('button');
    rotateButton.className = 'enviar';
    rotateButton.innerText = 'Enviar';

    container.appendChild(rotateButton);
    document.addEventListener('click', (e) => {
        if (e.target.className === 'enviar') {
            const files = document.querySelector('.upload').files
            const objectLoader = makeObjectLoader(files);

            objectLoader.load();
            FileUtil.uploadFiles(Array.from(Object.values(files)), document.querySelector('.client').value)
        }
    });
}

export function createCadastroActions() {
    const container = document.querySelector('.actions');

    createUploadInput(container, UrlUtil.getUrlHash());
    createRotateButton(container);
    createClientInput(container);
    createSendButton(container);
}
