import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const errors: string[] = [];

if (typeof Date.prototype.toDayJS === 'undefined') {
    Object.defineProperty(Date.prototype, 'toDayJS', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            return dayjs(this);
        },
    });
} else {
    errors.push('toDayJS');
}

if (typeof Date.prototype.fromNow === 'undefined') {
    Object.defineProperty(Date.prototype, 'fromNow', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            return dayjs(this).fromNow();
        },
    });
} else {
    errors.push('fromNow');
}

if (errors.length > 0) {
    console.error(`@avidian/extras:Date: Unable to patch the following methods - ${errors.join(', ')}`);
}

export {};
