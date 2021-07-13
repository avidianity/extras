declare global {
    interface Error {
        toObject(): Record<string, any>;
    }
}
export {};
