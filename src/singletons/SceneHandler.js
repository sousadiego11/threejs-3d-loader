import { 
    makeCamera, 
    makeOrbitControls, 
    makeRenderer, 
    makeScene 
} from '../factories';
import * as THREE from 'three';

class SceneHandler {
    constructor() {
        this.renderer = makeRenderer();
        this.camera = makeCamera();
        this.orbitControls = makeOrbitControls(this.camera, this.renderer);
        this.scene = makeScene();

        document.body.appendChild(this.renderer.domElement);
    }
    
    validate(remove = false) {
        const canvas = document.body.getElementsByTagName('canvas')[0]
        
        if (canvas && remove) {
            document.body.removeChild(this.renderer.domElement)
        }

        else if (!canvas && !remove) {
            document.body.appendChild(this.renderer.domElement);
        }
    }
}

export const sceneHandler = new SceneHandler()