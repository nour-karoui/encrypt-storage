"use strict";
exports.__esModule = true;
var encrypt_storage_1 = require("./encrypt-storage");
var encryption = new encrypt_storage_1.EncryptStorage('hello');
encryption.encryptObject('store', { nour: 'name' });
