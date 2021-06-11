import { flattenDeep } from 'lodash';

Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.first = function () {
    if (this.length > 0) {
        return this[0];
    }
    return null;
};

Array.prototype.last = function () {
    if (this.length > 0) {
        return this[this.length - 1];
    }
    return null;
};

Array.prototype.flatten = function () {
    return flattenDeep(this);
};

Array.prototype.groupBy = function <T, K extends keyof T>(key: K) {
    const temp: { [key: string]: Array<T> } = {};

    this.forEach((item) => {
        const property: any = item[key];
        if (!(property in temp)) {
            temp[property] = [];
        }
        temp[property].push(item);
    });
    return Object.keys(temp).map((key) => temp[key]);
};

Array.prototype.except = function <T, K extends keyof T>(keys: K[]) {
    return [...this].map((item: Object) => item.except(keys as any));
};

Array.prototype.only = function <T, K extends keyof T>(keys: K[]) {
    return [...this].map((item: Object) => item.only(keys as any));
};

export {};
