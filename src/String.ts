import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { trim } from 'lodash';

dayjs.extend(relativeTime);

const errors: string[] = [];

if (typeof String.prototype.toNumber === 'undefined') {
    Object.defineProperty(String.prototype, 'toNumber', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
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
        },
    });
} else {
    errors.push('toNumber');
}

if (typeof String.prototype.trim === 'undefined') {
    Object.defineProperty(String.prototype, 'trim', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            return trim(this.toString());
        },
    });
} else {
    errors.push('trim');
}

if (typeof String.prototype.toDayJS === 'undefined') {
    Object.defineProperty(String.prototype, 'toDayJS', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            const instance = dayjs(this.toString());
            if (!instance.isValid()) {
                throw new Error('Invalid Date');
            }
            return instance;
        },
    });
} else {
    errors.push('toDayJS');
}

if (typeof String.prototype.toDate === 'undefined') {
    Object.defineProperty(String.prototype, 'toDate', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            const instance = dayjs(this.toString());
            if (!instance.isValid()) {
                throw new Error('Invalid Date');
            }
            return instance.toDate();
        },
    });
} else {
    errors.push('toDate');
}

if (typeof String.prototype.fromNow === 'undefined') {
    Object.defineProperty(String.prototype, 'fromNow', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            const instance = dayjs(this.toString());
            if (!instance.isValid()) {
                throw new Error('Invalid Date');
            }
            return instance.fromNow();
        },
    });
} else {
    errors.push('fromNow');
}

if (typeof String.random === 'undefined') {
    Object.defineProperty(String, 'random', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function (size: number) {
            const characters = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
            let results = '';

            for (let x = 0; x < size; x++) {
                results += characters.charAt(Math.floor(Math.random() * characters.length));
            }

            return results;
        },
    });
} else {
    errors.push('random');
}

if (errors.length > 0) {
    console.error(`@avidian/extras:String: Unable to patch the following methods - ${errors.join(', ')}`);
}

export {};
