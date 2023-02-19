import { makeObjLoader } from '../factories';
import { FileUtil } from '../utils/FileUtil';
import { position } from '../utils/functions';
import { UrlUtil } from '../utils/UrlUtil';

export class MtlRemoteStrategy {

    /**
     * @param { MTLLoader } loader
     */
    constructor(scene, files = [], loader, client) {
        this.scene = scene;
        this.files = files;
        this.loader = loader;
        this.client = client;
    }

    async load() {
        const mtlObjectUrl = UrlUtil.getRemoteObjectUrl(FileUtil.getFileByText(this.files, '.mtl'), this.client)
        const objObjectUrl = UrlUtil.getRemoteObjectUrl(FileUtil.getFileByText(this.files, '.obj'), this.client)

        const materials = await this.loader.loadAsync(mtlObjectUrl)
        materials.preload()
        
        const model = await makeObjLoader()
            .setMaterials(materials)
            .loadAsync(objObjectUrl)

        position(model)
        this.scene.add(model);
    }
}
