export default class Interface {

    construct(name, methods) {
        this._methods = methods;
    }

    ensureImplements(object) {
        console.log(this._methods);
        for (const methodName of this._methods) {
            if (typeof object[methodName] !== "function") {
                throw new Error(
                    "object does not contain " +
                    `interface(${this.name}) method: ${methodName}`
                );
            }
        }
    }
}