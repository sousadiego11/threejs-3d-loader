export class UrlUtil {

    static getRemoteSharedPath() {
        return `${UrlUtil.getRemoteUrl()}/shared/${UrlUtil.getUrlHash()}`
    }

    static getRemoteUrl() {
        return process.env.REMOTE_API
    }

    static getObjectUrl(object) {
        return URL.createObjectURL(object)
    }

    static getRemoteObjectUrl(object) {
        return `${UrlUtil.getRemoteSharedPath()}/${object.name}`
    }

    static getUrlHash() {
        return window.location.hash.replace('#', '')
    }
    
}