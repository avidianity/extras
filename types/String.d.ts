import { Dayjs } from 'dayjs';
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
export {};
