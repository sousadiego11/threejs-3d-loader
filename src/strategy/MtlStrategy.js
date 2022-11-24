import { makeMtlLoader, makeObjLoader } from '../factories';

export class MtlStrategy {
    constructor(scene, files = []) {
        this.loader = makeMtlLoader(files);
        this.scene = scene;
        this.files = files
    }

    getObjectUrl(extension) {
        return URL.createObjectURL(this.files.find((f) => f.name.includes(extension)))
    }

    load() {
        this.loader.load(this.getObjectUrl('.mtl'), (materials) => {
            materials.preload();

            makeObjLoader()
                .setMaterials(materials)
                .load(this.getObjectUrl('.obj'), (model) => {
                    model.position.set(0, 0, 0);
                    this.scene.add(model);
                });
        });
    }
}
