import 'core-js';
import { Dayjs } from 'dayjs';
declare global {
    interface String {
        toNumber(): number;
        trim(): string;
        toDate(): Date;
        toDayJS(): Dayjs;
        fromNow(): string;
    }
    interface Error {
        toJSON(): Record<string, unknown>;
    }
    interface Array<T> {
        random(): T;
        first(): T | null;
        last(): T | null;
        flatten(): T[];
        groupBy<K extends keyof T>(key: K): T[][];
        except<K extends keyof T>(keys: K[]): T[];
        only<K extends keyof T>(keys: K[]): T[];
    }
    interface Object {
        serialize(): string;
        except<T = any>(keys: string[]): T;
        getOnly<T = any>(keys: string[]): T;
        copy<T = any>(): T;
    }
    interface StringConstructor {
        random(size?: number): string;
    }
    interface Date {
        toDayJS(): Dayjs;
        fromNow(): string;
    }
}
export * from './Array';
export * from './Date';
export * from './Error';
export * from './Object';
export * from './String';
