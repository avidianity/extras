"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var errors = [];
if (typeof Array.prototype.random === 'undefined') {
    Object.defineProperty(Array.prototype, 'random', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            return this[Math.floor(Math.random() * this.length)];
        },
    });
}
else {
    errors.push('random');
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
}
else {
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
}
else {
    errors.push('last');
}
if (typeof Array.prototype.flatten === 'undefined') {
    Object.defineProperty(Array.prototype, 'flatten', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            return lodash_1.flattenDeep(this);
        },
    });
}
else {
    errors.push('flatten');
}
if (typeof Array.prototype.groupBy === 'undefined') {
    Object.defineProperty(Array.prototype, 'groupBy', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function (key) {
            var temp = {};
            this.forEach(function (item) {
                var property = item[key];
                if (!(property in temp)) {
                    temp[property] = [];
                }
                temp[property].push(item);
            });
            return Object.keys(temp).map(function (key) { return temp[key]; });
        },
    });
}
else {
    errors.push('groupBy');
}
if (typeof Array.prototype.except === 'undefined') {
    Object.defineProperty(Array.prototype, 'except', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function (keys) {
            return __spreadArray([], this).map(function (item) { return item.except(keys); });
        },
    });
}
else {
    errors.push('except');
}
if (typeof Array.prototype.only === 'undefined') {
    Object.defineProperty(Array.prototype, 'only', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function (keys) {
            return __spreadArray([], this).map(function (item) { return item.getOnly(keys); });
        },
    });
}
else {
    errors.push('only');
}
if (typeof Array.prototype.has === 'undefined') {
    Object.defineProperty(Array.prototype, 'has', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function (predicate) {
            for (var key in this) {
                var item = this[key];
                if (predicate(item, key, this)) {
                    return true;
                }
            }
            return false;
        },
    });
}
else {
    errors.push('has');
}
if (errors.length > 0) {
    console.error("@avidian/extras:Array: Unable to patch the following methods - " + errors.join(', '));
}
