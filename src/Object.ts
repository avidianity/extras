Object.prototype.serialize = function () {
    return JSON.stringify(this);
};

Object.prototype.except = function <T, K extends keyof T>(keys: K[]) {
    const copy = {} as any;

    for (const key in this) {
        if (!keys.includes(key as any)) {
            copy[key] = (this as any)[key];
        }
    }
    return copy;
};

Object.prototype.only = function <T = any>(keys: string[]) {
    const result = {} as any;
    for (const key of keys) {
        result[key] = (this as any)[key];
    }
    return result;
};

Object.prototype.copy = function () {
    return JSON.parse(JSON.stringify(this));
};

export {};
