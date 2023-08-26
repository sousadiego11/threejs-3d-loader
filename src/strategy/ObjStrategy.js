import { UrlUtil } from "../utils/UrlUtil";
import { position, scale } from "../utils/functions";
import * as THREE from 'three';

export class ObjStrategy {
    constructor(scene, file, loader) {
        this.scene = scene;
        this.file = file;
        this.loader = loader;
    }

    load() {
        const objectUrl = UrlUtil.getObjectUrl(this.file)
        this.loader.load(objectUrl, (m) => {
            scale(m)
            position(m)

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

            this.scene.add(m);
        });
    }
}
