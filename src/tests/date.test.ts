import { assert } from 'chai';
import { isDayjs } from 'dayjs';

describe('Date extras work', () => {
    it('converts to a Dayjs instance', () => {
        const instance = new Date().toDayJS();

        assert(isDayjs(instance));
    });

    it('transforms into a Dayjs.fromNow() representation', () => {
        assert(new Date().fromNow() === 'a few seconds ago');
    });
});
