import { ObjStrategy, MtlStrategy, MtlRemoteStrategy } from '../strategy';
import { FileUtil } from '../utils/FileUtil';
import { makeMtlLoader, makeMtlRemoteLoader, makeObjLoader } from './';

export const makeLoaderStrategy = (scene, files, remoteFiles) => {
    if (FileUtil.isInvalidRequest(files, remoteFiles)) {
        throw new Error('Arquivo inválido')
    } else if (remoteFiles) {
        const loader = makeMtlRemoteLoader(remoteFiles)
        return new MtlRemoteStrategy(scene, remoteFiles, loader)
    } else if (FileUtil.isValidMtlRequest(files)) {
        const loader = makeMtlLoader(files)
        return new MtlStrategy(scene, files, loader);
    } else if (FileUtil.isValidObjRequest) {
        const loader = makeObjLoader()
        return new ObjStrategy(scene, files[0], loader);
    }
};
