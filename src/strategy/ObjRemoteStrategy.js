import { position } from "../utils/functions";
import { UrlUtil } from "../utils/UrlUtil";

export class ObjRemoteStrategy {
    constructor(scene, file, loader) {
        this.scene = scene;
        this.file = file;
        this.loader = loader;
    }

    load() {
        const objectUrl = UrlUtil.getRemoteObjectUrl(this.file)
        this.loader.load(objectUrl, (model) => {
            position(model);
            this.scene.add(model);
        });
    }
}
