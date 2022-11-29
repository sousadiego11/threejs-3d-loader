import { makeObjectLoader } from "../factories"
import { FileUtil } from "../utils/FileUtil"
import { UrlUtil } from "../utils/UrlUtil"

export function createUserActions() {
    const container = document.querySelector('.actions')
    const upload = document.querySelector('.upload')
    const rotate = document.querySelector('.rotate')

    upload && container.removeChild(upload)
    rotate && container.removeChild(rotate)

    FileUtil.getRemoteFiles(UrlUtil.getUrlHash()).then((files) => {
        const objectLoader = makeObjectLoader({}, files);

        objectLoader.load();
    })
}
