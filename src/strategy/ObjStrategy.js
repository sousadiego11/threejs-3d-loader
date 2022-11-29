import { makeObjLoader } from "../factories";
import { UrlUtil } from "../utils/UrlUtil";

export class ObjStrategy {
    constructor(scene, file, loader) {
        this.scene = scene;
        this.file = file;
        this.loader = loader;
    }

    load() {
        const objectUrl = UrlUtil.getObjectUrl(this.file)
        this.loader.load(objectUrl, (model) => {
            model.position.set(0, 0, 0);
            this.scene.add(model);
        });
    }
}
