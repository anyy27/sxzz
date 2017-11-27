import storage from "good-storage"

const PREFIX = "sxzz_"

class cache {
    constructor(key) {
        this.key = PREFIX + key;
    }

    get() {
        return storage.get(this.key)
    }

    set(value) {
        storage.set(this.key, value);
    }
}

class sessionCache {
    constructor(key) {
        this.key = PREFIX + key;
    }

    get() {
        return storage.session.get(this.key, null)
    }

    set(value) {
        storage.session.set(this.key, value);
    }
}

const docCache = new cache("docObj");
const shztCache = new cache("shzt");

const mzzzTabCache = new sessionCache("mzzzTab");


export {docCache, shztCache,mzzzTabCache};