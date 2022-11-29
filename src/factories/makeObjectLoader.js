import { ObjectLoader } from '../ObjectLoader';
import { sceneHandler } from '../SceneHandler';
import { makeLoaderStrategy } from './makeLoaderStrategy';

export function makeObjectLoader(files = {}, remoteFiles) {
    const loaderStrategy = makeLoaderStrategy(sceneHandler.scene, Array.from(Object.values(files)), remoteFiles)
    
    return new ObjectLoader(loaderStrategy);
}
