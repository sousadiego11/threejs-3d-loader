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
        const mtl = UrlUtil.getObjectUrl(FileUtil.getFileByText(this.files, '.mtl'))
        const obj = UrlUtil.getObjectUrl(FileUtil.getFileByText(this.files, '.obj'))

        this.loader.load(mtl, (materials) => {
            materials.preload();

            makeObjLoader()
                .setMaterials(materials)
                .load(obj, (model) => {
                    model.position.set(0, 0, 0);
                    this.scene.add(model);
                });
        });
    }
}
