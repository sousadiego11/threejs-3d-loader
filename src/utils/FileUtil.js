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
        }).catch(() => {
            window.alert('Ocorreu um erro ao salvar os arquivos na base de dados, tente novamente mais tarde.')
        })
    }

    static async getRemoteFiles(client) {
        try {
            const data = await fetch(`${UrlUtil.getRemoteUrl()}/${client}/files`)
            const parsed = await data.json()
            return parsed
        } catch (e) {
            throw new Error(e)
        }
    }
}
