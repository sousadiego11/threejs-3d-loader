export function createUserActions(hash) {
    const container = document.querySelector('.actions')
    const upload = document.querySelector('.upload')
    const rotate = document.querySelector('.rotate')
    console.log("🚀 ~ file: createUserActions.js ~ line 2 ~ createUserActions ~ hash", hash)

    upload && container.removeChild(upload)
    rotate && container.removeChild(rotate)
}
