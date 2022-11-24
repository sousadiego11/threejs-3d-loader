import { makeObjLoader } from "../factories";

export class ObjStrategy {
    constructor(scene) {
        this.loader = makeObjLoader();
        this.scene = scene;
    }

    load(objectUrl) {
        this.loader.load(objectUrl, (model) => {
            model.position.set(0, 0, 0);
            this.scene.add(model);
        });
    }
}
