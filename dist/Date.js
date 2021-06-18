"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dayjs_1 = __importDefault(require("dayjs"));
var relativeTime_1 = __importDefault(require("dayjs/plugin/relativeTime"));
dayjs_1.default.extend(relativeTime_1.default);
var errors = [];
if (typeof Date.prototype.toDayJS === 'undefined') {
    Object.defineProperty(Date.prototype, 'toDayJS', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            return dayjs_1.default(this);
        },
    });
}
else {
    errors.push('toDayJS');
}
if (typeof Date.prototype.fromNow === 'undefined') {
    Object.defineProperty(Date.prototype, 'fromNow', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            return this.toDayJS().fromNow();
        },
    });
}
else {
    errors.push('fromNow');
}
if (errors.length > 0) {
    console.error("@avidian/extras:Date: Unable to patch the following methods - " + errors.join(', '));
}
