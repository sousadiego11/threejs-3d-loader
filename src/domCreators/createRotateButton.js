import { sceneHandler } from "../SceneHandler";

export function createRotateButton(container) {
    const rotateButton = document.createElement('button');
    rotateButton.className = 'rotate';
    rotateButton.innerText = 'Rotação automática';

    container.appendChild(rotateButton);
    document.addEventListener('change', (e) => {
        if (e.target.className === 'rotate') {
            sceneHandler.orbitControls.autoRotate = !sceneHandler.orbitControls.autoRotate;
        }
    });
}
