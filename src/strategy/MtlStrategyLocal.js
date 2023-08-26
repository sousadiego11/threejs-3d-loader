import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { makeObjLoader } from '../factories';
import { position } from '../utils/functions';
import * as THREE from 'three';

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

        model.traverse((m) => {
            if (m instanceof THREE.Group) {
                m.castShadow = true
                m.receiveShadow = true
                m.children.forEach((c) => {
                    c.castShadow = true
                    c.receiveShadow = true
                })
            } else if (m instanceof THREE.Mesh) {
                m.castShadow = true
                m.receiveShadow = true
            }
        })

        model.traverse(console.log)
        position(model)
        this.scene.add(model);
}
}
