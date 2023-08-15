import { UrlUtil } from "../utils/UrlUtil";
import { position } from "../utils/functions";

export class ObjStrategy {
    constructor(scene, file, loader) {
        this.scene = scene;
        this.file = file;
        this.loader = loader;
    }

    load() {
        const objectUrl = UrlUtil.getObjectUrl(this.file)
        this.loader.load(objectUrl, (model) => {
            position(model)
            this.scene.add(model);
        });
    }
}
