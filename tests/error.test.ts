import '../src/index';
import { assert } from 'chai';

describe('Error extras work', () => {
    it('turns Error into a jsonable object', () => {
        const error = new Error('An error occured');

        assert(error.toObject() instanceof Error === false);
    });
});
