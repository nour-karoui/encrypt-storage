"use strict";
exports.__esModule = true;
exports.EncryptStorage = void 0;
var Crypto = require("crypto-js");
var window = new Window();
var EncryptStorage = /** @class */ (function () {
    function EncryptStorage(secret, storage) {
        this.secret = secret;
        // if (typeof window !== "undefined") {
        //     this.storage = window[storage || 'localStorage'];
        // }
        this.storage = window[storage || 'localStorage'];
    }
    EncryptStorage.prototype.encryptObject = function (key, data) {
        var _a;
        var dataString = JSON.stringify(data);
        var encryptedData = Crypto.AES.encrypt(dataString, this.secret);
        (_a = this.storage) === null || _a === void 0 ? void 0 : _a.setItem(key, encryptedData.toString());
    };
    return EncryptStorage;
}());
exports.EncryptStorage = EncryptStorage;
