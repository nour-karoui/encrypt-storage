import * as Crypto from 'crypto-js';

export class EncryptStorage {
    storage: Storage | undefined;

    constructor(private secret: string, storage?: 'localStorage' | 'sessionStorage') {
        if (typeof window !== "undefined") {
            this.storage = window[storage || 'localStorage'];
        }
    }

    encrypt(key: string, data: any): void {
        if(typeof data === "object"){
            data = JSON.stringify(data);
        } else if(typeof data === "number") {
            data = data.toString();
        } else if(typeof data !== "string") {
            throw new Error('invalid type')
        }
        const encryptedData = Crypto.AES.encrypt(data, this.secret);
        this.storage?.setItem(key, encryptedData.toString());
    }

    decrypt(key: string): any {
        const data = this.storage?.getItem(key);
        let decryptedData = null;
        if(data) {
            decryptedData = (Crypto.AES.decrypt(data, this.secret)).toString(Crypto.enc.Utf8);
            try {
                decryptedData = JSON.parse(decryptedData);
            } catch(e) {}
        }
        return decryptedData;
    }

    remove(key: string) {
        this.storage?.removeItem(key);
    }
}
