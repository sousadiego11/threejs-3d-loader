import { makeObjLoader } from '../factories';
import { FileUtil } from '../utils/FileUtil';
import { position } from '../utils/functions';
import { UrlUtil } from '../utils/UrlUtil';

export class MtlRemoteStrategy {
    constructor(scene, files = [], loader, client) {
        this.scene = scene;
        this.files = files;
        this.loader = loader;
        this.client = client;
    }

    load() {
        const mtlObjectUrl = UrlUtil.getRemoteObjectUrl(FileUtil.getFileByText(this.files, '.mtl'), this.client)
        const objObjectUrl = UrlUtil.getRemoteObjectUrl(FileUtil.getFileByText(this.files, '.obj'), this.client)

        this.loader.load(mtlObjectUrl, (materials) => {
            materials.preload();

            makeObjLoader()
                .setMaterials(materials)
                .load(objObjectUrl, (model) => {
                    position(model)
                    model.traverse((child) => {
                        child.castShadow = true
                        child.receiveShadow = true
                    })
                    this.scene.add(model);
                });
        });
    }
}
