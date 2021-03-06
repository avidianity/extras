declare global {
    interface Error {
        toObject(): Record<string, any>;
    }
}

const errors: string[] = [];

if (typeof Error.prototype.toObject === 'undefined') {
    Object.defineProperty(Error.prototype, 'toObject', {
        writable: false,
        enumerable: false,
        configurable: false,
        value: function () {
            const alt = {} as any;

            const _this = this as any;
            Object.getOwnPropertyNames(_this).forEach(function (key) {
                alt[key] = _this[key];
            }, _this);

            if ('stack' in alt) {
                alt.stack = alt.stack
                    .split(/\r?\n/)
                    .map((string: string) => string.trim())
                    .filter((_: any, i: number) => i !== 0);
            }

            return alt;
        },
    });
} else {
    errors.push('toObject');
}

if (errors.length > 0) {
    console.error(`@avidian/extras:Error: Unable to patch the following methods - ${errors.join(', ')}`);
}

export {};
