import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

Date.prototype.toDayJS = function () {
    return dayjs(this);
};

Date.prototype.fromNow = function () {
    return this.toDayJS().fromNow();
};
