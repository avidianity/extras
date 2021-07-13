import '../src/index';
import { assert } from 'chai';
import { isDayjs } from 'dayjs';

describe('String extras work', () => {
    it('casts a string to a number', () => {
        const data = '1.5';

        assert(1.5 === data.toNumber());
    });

    it('generates a random string with the specified length', () => {
        const length = 10;

        const value = String.random(length);

        assert(value.length === length, value);
    });

    it('converts into a dayjs object', () => {
        const value = new Date().toJSON().toDayJS();

        assert(isDayjs(value));
    });

    it('converts into a date object', () => {
        const date = new Date().toJSON().toDate();

        assert(date instanceof Date);
    });

    it('transforms to a Dayjs.fromNow() string representation', () => {
        assert(new Date().toJSON().fromNow() === 'a few seconds ago');
    });
});
