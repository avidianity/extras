import { flattenDeep } from 'lodash';

declare global {
    interface Array<T> {
        random(): T;
        first(): T | null;
        last(): T | null;
        flatten(): T[];
        groupBy<K extends keyof T>(key: K): T[][];
        except<K extends keyof T>(keys: K[]): T[];
        only<K extends keyof T>(keys: K[]): T[];
        has(predicate: (item: T, index: number, thisArg: this) => boolean): boolean;
        limit(length: number): this;
    }
}

const errors: string[] = [];

if (typeof Array.prototype.random === 'undefined') {
    Object.defineProperty(Array.prototype, 'random', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            return this[Math.floor(Math.random() * this.length)];
        },
    });
} else {
    errors.push('random');
}

if (typeof Array.prototype.limit === 'undefined') {
    Object.defineProperty(Array.prototype, 'limit', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function (length: number) {
            if (this.length > length) {
                this.length = length;
            }

            return this;
        },
    });
} else {
    errors.push('limit');
}

if (typeof Array.prototype.first === 'undefined') {
    Object.defineProperty(Array.prototype, 'first', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            if (this.length > 0) {
                return this[0];
            }
            return null;
        },
    });
} else {
    errors.push('first');
}

if (typeof Array.prototype.last === 'undefined') {
    Object.defineProperty(Array.prototype, 'last', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            if (this.length > 0) {
                return this[this.length - 1];
            }
            return null;
        },
    });
} else {
    errors.push('last');
}

if (typeof Array.prototype.flatten === 'undefined') {
    Object.defineProperty(Array.prototype, 'flatten', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            return flattenDeep(this);
        },
    });
} else {
    errors.push('flatten');
}

if (typeof Array.prototype.groupBy === 'undefined') {
    Object.defineProperty(Array.prototype, 'groupBy', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function <T, K extends keyof T>(key: K) {
            const temp: { [key: string]: Array<T> } = {};

            this.forEach((item: any) => {
                const property: any = item[key];
                if (!(property in temp)) {
                    temp[property] = [];
                }
                temp[property].push(item);
            });
            return Object.keys(temp).map((key) => temp[key]);
        },
    });
} else {
    errors.push('groupBy');
}

export function except<T, K extends keyof T>(item: T, keys: K[]) {
    const copy: any = {};

    for (const key in item) {
        if (!keys.includes(key as any)) {
            copy[key] = item[key];
        }
    }

    return copy;
}

export function only<T, K extends keyof T>(item: T, keys: K[]) {
    const copy: any = {};

    for (const key in item) {
        if (keys.includes(key as any)) {
            copy[key] = item[key];
        }
    }

    return copy;
}

if (typeof Array.prototype.except === 'undefined') {
    Object.defineProperty(Array.prototype, 'except', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function <T, K extends keyof T>(keys: K[]) {
            return [...this].map((item: object) => except(item, keys as any));
        },
    });
} else {
    errors.push('except');
}

if (typeof Array.prototype.only === 'undefined') {
    Object.defineProperty(Array.prototype, 'only', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function <T, K extends keyof T>(keys: K[]) {
            return [...this].map((item: Object) => only(item, keys as any));
        },
    });
} else {
    errors.push('only');
}

if (typeof Array.prototype.has === 'undefined') {
    Object.defineProperty(Array.prototype, 'has', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function <T>(predicate: (item: T, index: number, thisArg: any) => boolean) {
            for (const key in this) {
                const item = this[key];
                if (predicate(item, key as any, this)) {
                    return true;
                }
            }
            return false;
        },
    });
} else {
    errors.push('has');
}

if (errors.length > 0) {
    console.error(`@avidian/extras:Array: Unable to patch the following methods - ${errors.join(', ')}`);
}

export {};
