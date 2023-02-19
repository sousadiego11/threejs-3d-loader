import { makeObjLoader } from '../factories';
import { FileUtil } from '../utils/FileUtil';
import { position } from '../utils/functions';
import { UrlUtil } from '../utils/UrlUtil';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

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

        position(model)
        this.scene.add(model);
}
}
