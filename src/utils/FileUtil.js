import { UrlUtil } from "./UrlUtil";

export class FileUtil {
    static isInvalidRequest(files = [], remoteFiles) {
        return files.length <= 1 && !files[0]?.name?.includes('.obj') && remoteFiles?.length <= 0;
    }

    static isValidObjRequest(files = []) {
        return files.length <= 1 && files[0]?.name?.includes('.obj');
    }

    static isValidMtlRequest(files = []) {
        const hasMtlFile = !!files.find((f) => f?.name?.includes('.mtl'));
        return files.length > 1 && hasMtlFile;
    }

    static getFileByText(files, text) {
        return files.find((f) => f?.name?.includes(text))
    }

    static uploadFiles(files = [], client) {
        const data = new FormData()

        files.forEach((f) => data.append('files', f))

        fetch(`${UrlUtil.getRemoteUrl()}/${client}`, {
            method: 'POST',
            body: data
        })
    }

    static async getRemoteFiles() {
        const data = await fetch(`${UrlUtil.getRemoteUrl()}/${UrlUtil.getUrlHash()}/files`)
        const parsed = await data.json()
        return parsed
    }
}
