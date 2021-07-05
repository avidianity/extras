"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors = [];
if (typeof Error.prototype.toObject === 'undefined') {
    Object.defineProperty(Error.prototype, 'toObject', {
        writable: false,
        enumerable: false,
        configurable: false,
        value: function () {
            var alt = {};
            var _this = this;
            Object.getOwnPropertyNames(_this).forEach(function (key) {
                alt[key] = _this[key];
            }, _this);
            if ('stack' in alt) {
                alt.stack = alt.stack
                    .split(/\r?\n/)
                    .map(function (string) { return string.trim(); })
                    .filter(function (_, i) { return i !== 0; });
            }
            return alt;
        },
    });
}
else {
    errors.push('toObject');
}
if (errors.length > 0) {
    console.error("@avidian/extras:Error: Unable to patch the following methods - " + errors.join(', '));
}
