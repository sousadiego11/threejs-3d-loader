import { ObjStrategy, MtlStrategy } from '../strategy';
import { FileUtil } from '../utils/FileUtil';

export const makeLoaderStrategy = (scene, files) => {
    if (FileUtil.isInvalidRequest(files)) {
        throw new Error('Arquivo inválido')

    } else if (FileUtil.isValidMtlRequest(files)) {
        return new MtlStrategy(scene, files);

    } else if (FileUtil.isValidObjRequest) {
        return new ObjStrategy(scene, files[0]);
    }
};
