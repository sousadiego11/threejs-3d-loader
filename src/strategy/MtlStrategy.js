import { makeMtlLoader, makeObjLoader } from '../factories';
import { FileUtil } from '../utils/FileUtil';
import { UrlUtil } from '../utils/UrlUtil';

export class MtlStrategy {
    constructor(scene, files = []) {
        this.loader = makeMtlLoader(files);
        this.scene = scene;
        this.files = files
    }

    load() {
        const mtlObjectUrl = UrlUtil.getObjectUrl(FileUtil.getFileByText(this.files, '.mtl'))
        const objObjectUrl = UrlUtil.getObjectUrl(FileUtil.getFileByText(this.files, '.obj'))

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
