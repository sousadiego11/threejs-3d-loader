import { createCadastroActions } from './domCreators/createCadastroActions';
import { createUserActions } from './domCreators/createUserActions';
import { UrlUtil } from './utils/UrlUtil';

export class Router {
    #routes = {}

    constructor() {
        this.#routes = {
            ['cadastro']: createCadastroActions,
            ['clientes']: createUserActions
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
