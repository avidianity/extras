import dayjs, { Dayjs } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

declare global {
    interface String {
        toNumber(): number;
        toDate(): Date;
        toDayJS(): Dayjs;
        fromNow(): string;
        ucfirst(): string;
        ucwords(): string;
    }
    interface StringConstructor {
        random(size?: number): string;
    }
}

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

if (typeof String.prototype.ucfirst === 'undefined') {
    Object.defineProperty(String.prototype, 'ucfirst', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            const fragments = this.split('');

            if (fragments.length > 0) {
                fragments[0] = fragments[0].toUpperCase();
            }

            return fragments.join('');
        },
    });
} else {
    errors.push('ucfirst');
}

if (typeof String.prototype.ucwords === 'undefined') {
    Object.defineProperty(String.prototype, 'ucwords', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            return this.split(' ')
                .map((string: string) => {
                    const fragments = string.split('');

                    if (fragments.length > 0) {
                        fragments[0] = fragments[0].toUpperCase();
                    }

                    return fragments.join('');
                })
                .join(' ');
        },
    });
} else {
    errors.push('ucwords');
}

if (errors.length > 0) {
    console.error(`@avidian/extras:String: Unable to patch the following methods - ${errors.join(', ')}`);
}

export {};
