export class UrlUtil {

    static getRemoteSharedPath() {
        return `${UrlUtil.getRemoteUrl()}/shared`
    }

    static getRemoteUrl() {
        return process.env.REMOTE_API
    }

    static getObjectUrl(object) {
        return URL.createObjectURL(object)
    }

    static getRemoteObjectUrl(object, client) {
        return `${UrlUtil.getRemoteSharedPath()}/${client}/${object.name}`
    }

    static getUrlHash() {
        return window.location.hash.replace('#', '')
    }
    
}