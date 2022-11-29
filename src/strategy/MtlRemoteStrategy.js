import { makeObjLoader } from '../factories';
import { FileUtil } from '../utils/FileUtil';
import { UrlUtil } from '../utils/UrlUtil';

export class MtlRemoteStrategy {
    constructor(scene, files = [], loader) {
        this.scene = scene;
        this.files = files;
        this.loader = loader;
    }

    load() {
        const mtlObjectUrl = UrlUtil.getRemoteObjectUrl(FileUtil.getFileByText(this.files, '.mtl'))
        const objObjectUrl = UrlUtil.getRemoteObjectUrl(FileUtil.getFileByText(this.files, '.obj'))

        this.loader.load(mtlObjectUrl, (materials) => {
            materials.preload();

            makeObjLoader()
                .setMaterials(materials)
                .load(objObjectUrl, (model) => {
                    model.position.set(0, 0, 0);
                    this.scene.add(model);
                });
        });
    }
}
