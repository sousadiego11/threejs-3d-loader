export class ObjectLoader {
    constructor(loaderStrategy) {
        this.loaderStrategy = loaderStrategy
    }

    load() {
        this.loaderStrategy.load()
    }
}
