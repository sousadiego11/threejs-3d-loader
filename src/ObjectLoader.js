import { makeLoaderStrategy } from './factories';

export class ObjectLoader {
    constructor(scene, type) {
        this.scene = scene;
        this.loaderStrategy = makeLoaderStrategy(scene, type)
    }

    load(objectUrl) {
        this.loaderStrategy.load(objectUrl)
    }
}
