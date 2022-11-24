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
}
