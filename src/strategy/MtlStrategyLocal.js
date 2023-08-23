import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { makeObjLoader } from '../factories';
import { position } from '../utils/functions';

export class MtlStrategyLocal {

    constructor(scene) {
        this.scene = scene;
    }

    async load(mtlUrl, objUrl) {
        const materials = await new MTLLoader().loadAsync(mtlUrl)
        materials.preload()
        
        const model = await makeObjLoader()
            .setMaterials(materials)
            .loadAsync(objUrl)

        position(model)
        this.scene.add(model);
}
}
