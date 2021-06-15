import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { trim } from 'lodash';

dayjs.extend(relativeTime);

String.prototype.toNumber = function () {
    const parts = this.split('.');
    if (parts.length > 1) {
        const whole = (parts[0].match(/\d/g) || []).join('');
        const decimals = (parts[1].match(/\d/g) || []).join('');
        return Number(`${whole}.${decimals}`) || 0;
    }
    const match = this.match(/\d/g);
    if (!match) {
        return 0;
    }
    return Number(match.join('')) || 0;
};

String.prototype.trim = function () {
    return trim(this.toString());
};

String.prototype.toDayJS = function () {
    const instance = dayjs(this.toString());
    if (!instance.isValid()) {
        throw new Error('Invalid Date');
    }
    return instance;
};

String.prototype.toDate = function () {
    return this.toDayJS().toDate();
};

String.prototype.fromNow = function () {
    return this.toDayJS().fromNow();
};

String.random = (size = 40) => {
    const characters = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let results = '';

    for (let x = 0; x < size; x++) {
        results += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return results;
};

export {};
