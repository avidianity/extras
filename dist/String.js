"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dayjs_1 = __importDefault(require("dayjs"));
var relativeTime_1 = __importDefault(require("dayjs/plugin/relativeTime"));
var lodash_1 = require("lodash");
dayjs_1.default.extend(relativeTime_1.default);
var errors = [];
if (typeof String.prototype.toNumber === 'undefined') {
    Object.defineProperty(String.prototype, 'toNumber', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
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
        },
    });
}
else {
    errors.push('toNumber');
}
if (typeof String.prototype.trim === 'undefined') {
    Object.defineProperty(String.prototype, 'trim', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            return lodash_1.trim(this.toString());
        },
    });
}
else {
    errors.push('trim');
}
if (typeof String.prototype.toDayJS === 'undefined') {
    Object.defineProperty(String.prototype, 'toDayJS', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            var instance = dayjs_1.default(this.toString());
            if (!instance.isValid()) {
                throw new Error('Invalid Date');
            }
            return instance;
        },
    });
}
else {
    errors.push('toDayJS');
}
if (typeof String.prototype.toDate === 'undefined') {
    Object.defineProperty(String.prototype, 'toDate', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            var instance = dayjs_1.default(this.toString());
            if (!instance.isValid()) {
                throw new Error('Invalid Date');
            }
            return instance.toDate();
        },
    });
}
else {
    errors.push('toDate');
}
if (typeof String.prototype.fromNow === 'undefined') {
    Object.defineProperty(String.prototype, 'fromNow', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            var instance = dayjs_1.default(this.toString());
            if (!instance.isValid()) {
                throw new Error('Invalid Date');
            }
            return instance.fromNow();
        },
    });
}
else {
    errors.push('fromNow');
}
if (typeof String.random === 'undefined') {
    Object.defineProperty(String, 'random', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function (size) {
            var characters = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
            var results = '';
            for (var x = 0; x < size; x++) {
                results += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return results;
        },
    });
}
else {
    errors.push('random');
}
if (errors.length > 0) {
    console.error("@avidian/extras:String: Unable to patch the following methods - " + errors.join(', '));
}
