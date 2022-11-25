import { createCadastroActions } from './domCreators/createCadastroActions';

export class Router {

    constructor() {
        this.routes = {
            ['#cadastro']: () => createCadastroActions()
        }
    }

    listen() {
        window.addEventListener('hashchange', () => this.routes[window.location.hash]?.())
        window.addEventListener('load', () => this.routes[window.location.hash]?.())
    }
}
