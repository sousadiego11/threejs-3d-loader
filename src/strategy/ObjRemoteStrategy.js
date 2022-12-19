import { position } from "../utils/functions";
import { UrlUtil } from "../utils/UrlUtil";

export class ObjRemoteStrategy {
    constructor(scene, file, loader, client) {
        this.scene = scene;
        this.file = file;
        this.loader = loader;
        this.client = client;
    }

    load() {
        const objectUrl = UrlUtil.getRemoteObjectUrl(this.file, client)
        this.loader.load(objectUrl, (model) => {
            position(model);
            this.scene.add(model);
        });
    }
}
