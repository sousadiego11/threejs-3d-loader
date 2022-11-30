import { domManager } from '../singletons/DomManager';
import { UrlUtil } from '../utils/UrlUtil';

export class Router {
    #routes = {}

    constructor() {
        this.#routes = {
            ['cadastro']: () => domManager.addCadastroActions(),
            ['clientes']: () => domManager.addUserActions()
        }
    }

    #exec() {
        const action =  this.#routes[UrlUtil.getUrlHash()] ?? this.#routes.clientes
        action(UrlUtil.getUrlHash())
    }

    listen() {
        window.addEventListener('hashchange', () => this.#exec())
        window.addEventListener('load', () => this.#exec())
    }
}
