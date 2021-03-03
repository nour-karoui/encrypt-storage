export declare class EncryptStorage {
    private secret;
    storage: Storage | undefined;
    constructor(secret: string, storage?: 'localStorage' | 'sessionStorage');
    encryptObject(key: string, data: Object): void;
    encryptString(key: string, data: string): void;
    decryptString(key: string): string | null;
    decryptObject(key: string): any;
    removeElement(key: string): void;
}
