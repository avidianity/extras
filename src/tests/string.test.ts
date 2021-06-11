import '../index';
import { assert } from 'chai';

describe('String extras work', () => {
    it('casts a string to a number', () => {
        const data = '1.5';

        assert(1.5 === data.toNumber());
    });

    it('trims trailing or leading whitespaces', () => {
        const data = 'a string  ';

        const value = data.trim();

        assert(value === 'a string');
    });

    it('generates a random string with the specified length', () => {
        const length = 10;

        const value = String.random(length);

        assert(value.length === length, value);
    });
});
