import { ObjectLoader } from '../ObjectLoader';
import { sceneHandler } from '../SceneHandler';
import { makeLoaderStrategy } from './makeLoaderStrategy';

export function makeObjectLoader(files = []) {
    const loaderStrategy = makeLoaderStrategy(sceneHandler.scene, Array.from(Object.values(files)))
    
    return new ObjectLoader(loaderStrategy);
}
