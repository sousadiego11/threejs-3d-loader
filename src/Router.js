import { createCadastroActions } from './domCreators/createCadastroActions';
import { createUserActions } from './domCreators/createUserActions';

export class Router {
    #routes = {}

    constructor() {
        this.#routes = {
            ['cadastro']: createCadastroActions,
            ['clientes']: createUserActions
        }
    }

    get hash() {
        return window.location.hash.replace('#', '')
    }

    #exec() {
        const action =  this.#routes[this.hash] ?? this.#routes.clientes
        action(this.hash)
    }

    listen() {
        window.addEventListener('hashchange', () => this.#exec())
        window.addEventListener('load', () => this.#exec())
    }
}
