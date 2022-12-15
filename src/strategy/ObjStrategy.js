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
            positionO(model)
            this.scene.add(model);
        });
    }
}
