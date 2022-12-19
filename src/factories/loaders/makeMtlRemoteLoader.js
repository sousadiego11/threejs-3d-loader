import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import * as THREE from 'three';
import { UrlUtil } from '../../utils/UrlUtil';

export const makeMtlRemoteLoader = (files = [], client) => {
    const loadingManagerMTL = new THREE.LoadingManager();

    loadingManagerMTL.setURLModifier((url) => {
        const currentFile = files.find((f) => url.includes(f.name))
        const newUrl = `${UrlUtil.getRemoteSharedPath()}/${client}/${currentFile.name}`
        
        return newUrl
    });
  
    return new MTLLoader(loadingManagerMTL);
};
