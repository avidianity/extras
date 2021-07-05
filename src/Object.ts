const errors: string[] = [];

if (typeof Object.prototype.serialize === 'undefined') {
    Object.defineProperty(Object.prototype, 'serialize', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            return JSON.stringify(this);
        },
    });
} else {
    errors.push('serialize');
}

if (typeof Object.prototype.except) {
    Object.defineProperty(Object.prototype, 'except', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function <T, K extends keyof T>(keys: K[]) {
            const copy = {} as any;

            for (const key in this) {
                if (!keys.includes(key as any)) {
                    copy[key] = (this as any)[key];
                }
            }
            return copy;
        },
    });
} else {
    errors.push('except');
}

if (typeof Object.prototype.getOnly === 'undefined') {
    Object.defineProperty(Object.prototype, 'getOnly', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function (keys: string[]) {
            const result = {} as any;
            for (const key of keys) {
                result[key] = (this as any)[key];
            }
            return result;
        },
    });
} else {
    errors.push('getOnly');
}

if (typeof Object.prototype.clone === 'undefined') {
    Object.defineProperty(Object.prototype, 'clone', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            return JSON.parse(JSON.stringify(this));
        },
    });
} else {
    errors.push('clone');
}

if (errors.length > 0) {
    console.error(`@avidian/extras:Object: Unable to patch the following methods - ${errors.join(', ')}`);
}

export {};
