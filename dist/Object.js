"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.prototype.serialize = function () {
    return JSON.stringify(this);
};
Object.prototype.except = function (keys) {
    var copy = {};
    for (var key in this) {
        if (!keys.includes(key)) {
            copy[key] = this[key];
        }
    }
    return copy;
};
Object.prototype.only = function (keys) {
    var result = {};
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        result[key] = this[key];
    }
    return result;
};
Object.prototype.copy = function () {
    return JSON.parse(JSON.stringify(this));
};
