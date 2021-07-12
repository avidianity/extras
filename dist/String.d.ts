import { Dayjs } from 'dayjs';
declare global {
    interface String {
        toNumber(): number;
        toDate(): Date;
        toDayJS(): Dayjs;
        fromNow(): string;
    }
    interface StringConstructor {
        random(size?: number): string;
    }
}
export {};
