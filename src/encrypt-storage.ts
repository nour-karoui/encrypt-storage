import * as Crypto from 'crypto-js';

export class EncryptStorage {
    storage: Storage | undefined;

    constructor(private secret: string, storage?: 'localStorage' | 'sessionStorage') {
        if (typeof window !== "undefined") {
            this.storage = window[storage || 'localStorage'];
        }
    }

    encryptObject(key: string, data: Object): void {
        const dataString = JSON.stringify(data);
        const encryptedData = Crypto.AES.encrypt(dataString, this.secret);
        this.storage?.setItem(key, encryptedData.toString());
        console.log(encryptedData);
    }

    encryptString(key: string, data: string) {
        const encryptedData = Crypto.AES.encrypt(data, this.secret).toString();
        this.storage?.setItem(key, encryptedData);
    }

    decryptString(key: string) {
        const data = this.storage?.getItem(key);
        let decryptedData = null;
        if(data) {
            decryptedData = (Crypto.AES.decrypt(data, this.secret)).toString(Crypto.enc.Utf8);
        }
        return decryptedData;
    }

    decryptObject(key: string) {
        const data = this.storage?.getItem(key);
        let decryptedData = null;
        if(data) {
            decryptedData = JSON.parse((Crypto.AES.decrypt(data, this.secret)).toString(Crypto.enc.Utf8));
        }
        return decryptedData;
    }

    removeElement(key: string) {
        this.storage?.removeItem(key);
    }
}
