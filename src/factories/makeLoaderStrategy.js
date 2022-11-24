import { ObjStrategy, MtlStrategy } from '../strategy';

export const makeLoaderStrategy = (scene, type) => {
    if (type === 'obj') {
        return new ObjStrategy(scene);
    }

    if (type === 'mtl') {
        return new MtlStrategy(scene);
    }
};
