import { makeObjectLoader } from '../factories';

export function createUploadInput(container) {
    const inputUpload = document.createElement('input');
    inputUpload.type = 'file';
    inputUpload.className = 'upload';
    inputUpload.multiple = true;

    container.appendChild(inputUpload);
    document.addEventListener('change', (e) => {
        if (e.target.className === 'upload') {
            const objectLoader = makeObjectLoader(document.querySelector('.upload').files);
            objectLoader.load();
        }
    });
}
