export class FileUtil {
    static isInvalidRequest(files = []) {
        return files.length <= 1 && !files[0].name.includes('.obj');
    }

    static isValidObjRequest(files = []) {
        return files.length <= 1 && files[0].name.includes('.obj');
    }

    static isValidMtlRequest(files = []) {
        const hasMtlFile = !!files.find((f) => f.name.includes('.mtl'));
        return files.length > 1 && hasMtlFile;
    }

    static getFileByText(files, text) {
        return files.find((f) => f.name.includes(text))
    }

    static uploadFiles(files = [], hash) {
        const data = new FormData()

        files.forEach((f) => data.append('files', f))

        fetch(`http://192.168.0.17:8080/${hash}`, {
            method: 'POST',
            body: data
        })
    }
}
