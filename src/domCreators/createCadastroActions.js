import { createRotateButton } from './createRotateButton';
import { createUploadInput } from './createUploadInput';

export function createCadastroActions() {
    const container = document.querySelector('.actions');

    createUploadInput(container);
    createRotateButton(container);
}
