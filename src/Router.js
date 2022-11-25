import { createCadastroActions } from './domCreators/createCadastroActions';
import { createUserActions } from './domCreators/createUserActions';

export class Router {
    constructor() {
        this.routes = {
            ['#cadastro']: createCadastroActions,
            ['clientes']: createUserActions
        }
    }

    #exec() {
        const action =  this.routes[window.location.hash] ?? this.routes.clientes
        action(window.location.hash)
    }

    listen() {
        window.addEventListener('hashchange', () => this.#exec())
        window.addEventListener('load', () => this.#exec())
    }
}
