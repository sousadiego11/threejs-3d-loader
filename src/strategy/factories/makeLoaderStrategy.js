import { ObjStrategy, MtlStrategy, MtlRemoteStrategy, ObjRemoteStrategy } from '..';
import { FileUtil } from '../../utils/FileUtil';
import { makeMtlLoader, makeMtlRemoteLoader, makeObjLoader } from '../../factories';

export const makeLoaderStrategy = (scene, files, remoteFiles, client) => {

    if (FileUtil.isInvalidRequest(files, remoteFiles)) {
        throw new Error('Arquivo inválido')

    } else if (FileUtil.isValidMtlRequest(remoteFiles)) {
        const loader = makeMtlRemoteLoader(remoteFiles, client)
        return new MtlRemoteStrategy(scene, remoteFiles, loader, client)

    } else if (FileUtil.isValidMtlRequest(files)) {
        const loader = makeMtlLoader(files)
        return new MtlStrategy(scene, files, loader);

    } else if (FileUtil.isValidObjRequest(remoteFiles)) {
        const loader = makeObjLoader()
        return new ObjRemoteStrategy(scene, remoteFiles[0], loader, client);

    } else if (FileUtil.isValidObjRequest(files)) {
        const loader = makeObjLoader()
        return new ObjStrategy(scene, files[0], loader);
    }
    
};
