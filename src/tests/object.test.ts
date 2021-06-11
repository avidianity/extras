import '../index';
import { assert } from 'chai';

describe('Object extras work', () => {
    it('serializes an object to a json string', () => {
        const data = { name: 'Joe', age: 21 };

        assert(typeof data.serialize() === 'string');
    });

    it('returns an object except the specified keys', () => {
        const data = { name: 'Joe', age: 21 };

        const except = data.except(['age']);

        assert(!('age' in except));
    });

    it('returns an object with only the specified keys', () => {
        const data = { name: 'Joe', age: 21 };

        const except = data.only(['name']);

        assert(!('age' in except));
    });

    it('makes a copy of an object', () => {
        const data = { name: 'Joe', age: 21 };

        assert(data !== data.copy());
    });
});
