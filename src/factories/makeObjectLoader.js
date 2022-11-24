import { ObjectLoader } from '../ObjectLoader';
import { sceneHandler } from '../SceneHandler';

export function makeObjectLoader(files = []) {
    return new ObjectLoader(sceneHandler.scene, Array.from(Object.values(files)));
}
