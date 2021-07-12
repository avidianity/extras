declare global {
    interface Object {
        serializeAsJSON(): string;
        except<T = any>(keys: string[]): T;
        getOnly<T = any>(keys: string[]): T;
        replicate<T = any>(): T;
    }
}
export {};
