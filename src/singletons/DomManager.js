import { sceneHandler } from "./SceneHandler";
import { makeObjectLoader } from '../factories';
import { FileUtil } from "../utils/FileUtil";
import { UrlUtil } from "../utils/UrlUtil";

class DomManager {
    #actionsContainer
    #routeCleaner = () => {}
    
    constructor() {
        this.#actionsContainer = document.querySelector('.actions');
    }

    #setCleaner (classNames) {
        this.#routeCleaner = function() {
            classNames.forEach((className) => {
                const element = document.querySelector(className)

                element && this.#actionsContainer.removeChild(element)
            })
        }
    }

    #createRotateButton() {
        const rotateButton = document.createElement('button');
        rotateButton.className = 'rotate';
        rotateButton.innerText = 'Rotação automática';
    
        this.#actionsContainer.appendChild(rotateButton);

        document
            .querySelector('.rotate')
            .addEventListener('click', (e) => {
            if (e.target.className === 'rotate') {
                sceneHandler.orbitControls.autoRotate = !sceneHandler.orbitControls.autoRotate;
            }
        });
    }
    
     #createUploadInput() {
        const inputUpload = document.createElement('input');
        inputUpload.type = 'file';
        inputUpload.className = 'upload';
        inputUpload.multiple = true;
    
        this.#actionsContainer.appendChild(inputUpload);
    }
    
     #createClientInput() {
        const clientInput = document.createElement('input');
        clientInput.type = 'text';
        clientInput.className = 'client';
    
        this.#actionsContainer.appendChild(clientInput);
    }
    
     #createSendButton() {
        const rotateButton = document.createElement('button');
        rotateButton.className = 'enviar';
        rotateButton.innerText = 'Enviar';
    
        this.#actionsContainer.appendChild(rotateButton);
        
        document
            .querySelector('.enviar')
            .addEventListener('click', (e) => {
            if (e.target.className === 'enviar') {
                const files = document.querySelector('.upload').files
                const objectLoader = makeObjectLoader(files);
    
                objectLoader.load();
                FileUtil.uploadFiles(Array.from(Object.values(files)), document.querySelector('.client').value)
            }
        });
    }

    addCadastroActions() {
        this.#routeCleaner()

        this.#createUploadInput();
        this.#createRotateButton();
        this.#createClientInput();
        this.#createSendButton();

        this.#setCleaner(['.upload','.rotate','.enviar','.client'])
    }

    addUserActions() {
        this.#routeCleaner()
        this.#createRotateButton()
        
        FileUtil.getRemoteFiles(UrlUtil.getUrlHash())
        .then((files) => {
            makeObjectLoader({}, files)
            .load()
        })
        
        this.#setCleaner(['.rotate'])
    }
}

export const domManager = new DomManager()