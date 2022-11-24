import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import * as THREE from 'three';

export const makeMtlLoader = (files = []) => {
    const loadingManagerMTL = new THREE.LoadingManager();

    loadingManagerMTL.setURLModifier((url) => {
        const currentFile = files.find((f) => url.includes(f.name))
        
        return currentFile ? URL.createObjectURL(currentFile) : url
    });
  
    return new MTLLoader(loadingManagerMTL);
};
