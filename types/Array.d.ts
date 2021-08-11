declare global {
    interface Array<T> {
        random(): T;
        first(): T | null;
        last(): T | null;
        flatten(): T[];
        groupBy<K extends keyof T>(key: K): T[][];
        except<K extends keyof T>(keys: K[]): T[];
        only<K extends keyof T>(keys: K[]): T[];
        has(predicate: (item: T, index: number, thisArg: this) => boolean): boolean;
        limit(length: number): this;
    }
}
export declare function except<T, K extends keyof T>(item: T, keys: K[]): any;
export declare function only<T, K extends keyof T>(item: T, keys: K[]): any;
export {};
