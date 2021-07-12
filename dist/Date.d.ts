import { Dayjs } from 'dayjs';
declare global {
    interface Date {
        toDayJS(): Dayjs;
        fromNow(): string;
    }
}
export {};
