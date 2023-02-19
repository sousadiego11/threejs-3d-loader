import { sceneHandler } from '../../singletons/SceneHandler';
import { makeLoaderStrategy } from '../../strategy/factories/makeLoaderStrategy';
class ObjectLoader {
    constructor(loaderStrategy) {
        this.loaderStrategy = loaderStrategy
    }

    async load() {
        await this.loaderStrategy.load()
    }
}

export function makeObjectLoader(files = {}, remoteFiles, client) {
    const loaderStrategy = makeLoaderStrategy(sceneHandler.scene, Array.from(Object.values(files)), remoteFiles, client)
    
    return new ObjectLoader(loaderStrategy);
}
