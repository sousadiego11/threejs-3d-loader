import { sceneHandler } from "./SceneHandler";
import { makeObjectLoader } from '../factories';
import { FileUtil } from "../utils/FileUtil";
import cadastro from '../routes/cadastro/cadastro.html'
import cliente from '../routes/cliente/cliente.html'
import page404 from '../routes/page404/page404.html'

class DomManager {
    #container
    
    constructor() {
        this.#container = document.querySelector('.content');
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
    
    #toggleLoading(visible) {
        const element = document.getElementById('loader')
        element.style.display = visible ? 'block' : 'none'
    }

    addCadastroActions() {
        sceneHandler.validate()
        this.#container.innerHTML = cadastro
        this.#addRotateEvent();
        this.#addSendEvent();
    }
    
    addUserActions() {
        sceneHandler.validate()
        this.#container.innerHTML = cliente
        this.#addRotateEvent()
        this.#toggleLoading(true)

        FileUtil
        .getRemoteFiles()
        .then((files) => {
            makeObjectLoader({}, files)
            .load()
        })
        .catch(() => {
            this.#container.innerHTML = page404
            sceneHandler.validate(true)
        })
        .finally(() => {
            this.#toggleLoading(false)
        })
    }
}

export const domManager = new DomManager()