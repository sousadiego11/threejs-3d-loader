import { ObjStrategy, MtlStrategy } from '../strategy';

export const makeLoaderStrategy = (scene, files) => {
    if (files.length <= 1 && !files[0].name.includes('.obj')) {
        throw new Error('Arquivo inválido')
    }

    if (files.length <= 1 && files[0].name.includes('.obj')) {
        return new ObjStrategy(scene);
    } else {
        return new MtlStrategy(scene, files);
    }
};
