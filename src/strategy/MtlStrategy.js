import { makeMtlLoader, makeObjLoader } from '../factories';
import obj from '../shopping_bag.obj';

export class MtlStrategy {
    constructor(scene) {
        this.loader = makeMtlLoader();
        this.scene = scene;
    }

    load(objectUrl) {
        this.loader.load(objectUrl, (materials) => {
            console.log("🚀 ~ file: ObjectLoader.js ~ line 21 ~ MtlStrategy ~ this.loader.load ~ materials", materials);
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
