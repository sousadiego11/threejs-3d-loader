import { 
    makeCamera, 
    makeOrbitControls, 
    makeRenderer, 
    makeScene 
} from './factories';

export class SceneHandler {
    constructor() {
        this.renderer = makeRenderer();
        this.camera = makeCamera();
        this.orbitControls = makeOrbitControls(this.camera, this.renderer);
        this.scene = makeScene();

        document.body.appendChild(this.renderer.domElement);
    }
}

export const sceneHandler = new SceneHandler()