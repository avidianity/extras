"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
String.prototype.toNumber = function () {
    var parts = this.split('.');
    if (parts.length > 1) {
        var whole = (parts[0].match(/\d/g) || []).join('');
        var decimals = (parts[1].match(/\d/g) || []).join('');
        return Number(whole + "." + decimals) || 0;
    }
    var match = this.match(/\d/g);
    if (!match) {
        return 0;
    }
    return Number(match.join('')) || 0;
};
String.prototype.trim = function () {
    return lodash_1.trim(this.toString());
};
String.random = function (size) {
    if (size === void 0) { size = 40; }
    var characters = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    var results = '';
    for (var x = 0; x < size; x++) {
        results += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return results;
};
