"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
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
    return lodash_1.flattenDeep(this);
};
Array.prototype.groupBy = function (key) {
    var temp = {};
    this.forEach(function (item) {
        var property = item[key];
        if (!(property in temp)) {
            temp[property] = [];
        }
        temp[property].push(item);
    });
    return Object.keys(temp).map(function (key) { return temp[key]; });
};
Array.prototype.except = function (keys) {
    return __spreadArray([], this).map(function (item) { return item.except(keys); });
};
Array.prototype.only = function (keys) {
    return __spreadArray([], this).map(function (item) { return item.only(keys); });
};
