import { makeLoaderStrategy } from './factories';

export class ObjectLoader {
    constructor(scene, files = []) {
        this.scene = scene;
        this.files = files
        this.loaderStrategy = makeLoaderStrategy(scene, files)
    }

    load() {
        this.loaderStrategy.load(this.files)
    }
}
