import { sceneHandler } from "./SceneHandler";
import { makeObjectLoader } from '../factories';
import { FileUtil } from "../utils/FileUtil";
import { UrlUtil } from "../utils/UrlUtil";
import cadastro from '../routes/cadastro/cadastro.html'
import cliente from '../routes/cliente/cliente.html'

class DomManager {
    #actionsContainer
    
    constructor() {
        this.#actionsContainer = document.querySelector('.actions');
    }

    #addRotateEvent() {
        document
            .querySelector('.rotate')
            .addEventListener('click', (e) => {
            if (e.target.className === 'rotate') {
                sceneHandler.orbitControls.autoRotate = !sceneHandler.orbitControls.autoRotate;
            }
        });
    }
    
     #addSendEvent() {
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
        this.#actionsContainer.innerHTML = cadastro
        this.#addRotateEvent();
        this.#addSendEvent();
    }
    
    addUserActions() {
        this.#actionsContainer.innerHTML = cliente
        this.#addRotateEvent()
        
        FileUtil.getRemoteFiles()
        .then((files) => {
            makeObjectLoader({}, files)
            .load()
        })
    }
}

export const domManager = new DomManager()