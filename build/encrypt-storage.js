"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptStorage = void 0;
const Crypto = __importStar(require("crypto-js"));
class EncryptStorage {
    constructor(secret, storage) {
        this.secret = secret;
        if (typeof window !== "undefined") {
            this.storage = window[storage || 'localStorage'];
        }
    }
    encryptObject(key, data) {
        var _a;
        const dataString = JSON.stringify(data);
        const encryptedData = Crypto.AES.encrypt(dataString, this.secret);
        (_a = this.storage) === null || _a === void 0 ? void 0 : _a.setItem(key, encryptedData.toString());
        console.log(encryptedData);
    }
    encryptString(key, data) {
        var _a;
        const encryptedData = Crypto.AES.encrypt(data, this.secret).toString();
        (_a = this.storage) === null || _a === void 0 ? void 0 : _a.setItem(key, encryptedData);
    }
    decryptString(key) {
        var _a;
        const data = (_a = this.storage) === null || _a === void 0 ? void 0 : _a.getItem(key);
        let decryptedData = null;
        if (data) {
            decryptedData = (Crypto.AES.decrypt(data, this.secret)).toString(Crypto.enc.Utf8);
        }
        return decryptedData;
    }
    decryptObject(key) {
        var _a;
        const data = (_a = this.storage) === null || _a === void 0 ? void 0 : _a.getItem(key);
        let decryptedData = null;
        if (data) {
            decryptedData = JSON.parse((Crypto.AES.decrypt(data, this.secret)).toString(Crypto.enc.Utf8));
        }
        return decryptedData;
    }
    removeElement(key) {
        var _a;
        (_a = this.storage) === null || _a === void 0 ? void 0 : _a.removeItem(key);
    }
}
exports.EncryptStorage = EncryptStorage;
//# sourceMappingURL=encrypt-storage.js.map