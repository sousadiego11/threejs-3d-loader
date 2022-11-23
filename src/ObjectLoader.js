import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export class ObjectLoader {
    constructor(scene) {
        this.loader = new OBJLoader();
        this.scene = scene;
    }

    load(objectUrl) {
        this.loader.load(objectUrl, (model) => {
            model.position.set(0, 0, 0);
            this.scene.add(model);
        });
    }
}
