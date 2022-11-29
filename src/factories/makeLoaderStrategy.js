import { ObjStrategy, MtlStrategy } from '../strategy';
import { FileUtil } from '../utils/FileUtil';
import { makeMtlLoader } from './makeMtlLoader';

export const makeLoaderStrategy = (scene, files) => {
    if (FileUtil.isInvalidRequest(files)) {
        throw new Error('Arquivo inválido')

    } else if (FileUtil.isValidMtlRequest(files)) {
        const loader = makeMtlLoader(files)
        return new MtlStrategy(scene, files, loader);

    } else if (FileUtil.isValidObjRequest) {
        return new ObjStrategy(scene, files[0]);
    }
};
