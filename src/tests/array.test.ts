import '../index';
import { assert } from 'chai';
import { isArray } from 'lodash';

describe('Array extras work', () => {
    it('gets a random element', () => {
        const data = [1, 2, 3];

        const value = data.random();

        assert(data.includes(value));
    });

    it('gets the first element', () => {
        const data = [1, 2, 3];

        assert(data[0] === data.first());
    });

    it('gets the last element', () => {
        const data = [1, 2, 3];

        assert(data[2] === data.last());
    });

    it('flattens a nested array', () => {
        const data = [1, 2, 3, [4, 5]];

        const flattened = data.flatten();

        assert(flattened.includes(4) && flattened.includes(5), JSON.stringify(flattened));
    });

    it('groups an array of objects', () => {
        const data = [
            { gender: 'Male', name: 'Joe' },
            { gender: 'Female', name: 'Jane' },
        ];

        const grouped = data.groupBy('gender');

        assert(isArray(grouped[0]) && isArray(grouped[1]));
    });

    it('returns an array of objects except the specified keys', () => {
        const data = [
            { gender: 'Male', name: 'Joe' },
            { gender: 'Female', name: 'Jane' },
        ];

        const except = data.except(['gender']);

        assert(!('gender' in except[0]));
    });

    it('returns an array of objects with only the specified keys', () => {
        const data = [
            { gender: 'Male', name: 'Joe' },
            { gender: 'Female', name: 'Jane' },
        ];

        const only = data.only(['name']);

        assert(!('gender' in only[0]));
    });
});
