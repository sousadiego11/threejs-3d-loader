import { makeObjLoader } from '../factories';
import { FileUtil } from '../utils/FileUtil';
import { position } from '../utils/functions';
import { UrlUtil } from '../utils/UrlUtil';

export class MtlStrategy {
    constructor(scene, files = [], loader) {
        this.scene = scene;
        this.files = files;
        this.loader = loader;
    }

    load() {
        const mtlObjectUrl = UrlUtil.getObjectUrl(FileUtil.getFileByText(this.files, '.mtl'))
        const objObjectUrl = UrlUtil.getObjectUrl(FileUtil.getFileByText(this.files, '.obj'))

        this.loader.load(mtlObjectUrl, (materials) => {
            materials.preload();

            makeObjLoader()
                .setMaterials(materials)
                .load(objObjectUrl, (model) => {
                    position(model)
                    this.scene.add(model);
                });
        });
    }
}
