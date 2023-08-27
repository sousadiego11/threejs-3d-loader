import { makeObjLoader } from '../factories';
import { FileUtil } from '../utils/FileUtil';
import { position, scale } from '../utils/functions';
import { UrlUtil } from '../utils/UrlUtil';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import * as THREE from 'three';

export class MtlStrategy {

    /**
     * @param { MTLLoader } loader
     */
    constructor(scene, files = [], loader) {
        this.scene = scene;
        this.files = files;
        this.loader = loader;
    }

    async load() {
        const mtlObjectUrl = UrlUtil.getObjectUrl(FileUtil.getFileByText(this.files, '.mtl'))
        const objObjectUrl = UrlUtil.getObjectUrl(FileUtil.getFileByText(this.files, '.obj'))

        const materials = await this.loader.loadAsync(mtlObjectUrl)
        materials.preload()
        
        const model = await makeObjLoader()
            .setMaterials(materials)
            .loadAsync(objObjectUrl)

        model.traverse((m) => {
            if (m instanceof THREE.Group) {
                m.castShadow = true
                m.receiveShadow = true
                m.children.forEach((c) => {
                    c.castShadow = true
                    c.receiveShadow = true
                })
            } else if (m instanceof THREE.Mesh) {
                m.castShadow = true
                m.receiveShadow = true
            }
        })

        position(model)
        this.scene.add(model);
    }
}
