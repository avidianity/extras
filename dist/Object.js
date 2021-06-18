"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors = [];
if (typeof Object.prototype.serialize === 'undefined') {
    Object.defineProperty(Object.prototype, 'serialize', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            return JSON.stringify(this);
        },
    });
}
else {
    errors.push('serialize');
}
if (typeof Object.prototype.except) {
    Object.defineProperty(Object.prototype, 'except', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function (keys) {
            var copy = {};
            for (var key in this) {
                if (!keys.includes(key)) {
                    copy[key] = this[key];
                }
            }
            return copy;
        },
    });
}
else {
    errors.push('except');
}
if (typeof Object.prototype.getOnly === 'undefined') {
    Object.defineProperty(Object.prototype, 'getOnly', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function (keys) {
            var result = {};
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                result[key] = this[key];
            }
            return result;
        },
    });
}
else {
    errors.push('getOnly');
}
if (typeof Object.prototype.copy === 'undefined') {
    Object.defineProperty(Object.prototype, 'copy', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            return JSON.parse(JSON.stringify(this));
        },
    });
}
else {
    errors.push('copy');
}
if (errors.length > 0) {
    console.error("@avidian/extras:Object: Unable to patch the following methods - " + errors.join(', '));
}
