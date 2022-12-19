import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export const makeObjLoader = () => {
    return new OBJLoader();
};
