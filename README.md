<h1 align="center">Welcome to Encrypt Storage 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@storage-encryption/storage-encryption" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@storage-encryption/storage-encryption.svg">
  </a>
  <a href="https://github.com/nour-karoui/encrypt-storage#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/nour-karoui/encrypt-storage/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/nour-karoui/encrypt-storage/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/bishkou/password-pwnd" />
  </a>
</p>

* **Encrypt your storage using AES symmetric encryption algorithm**

* **JS and TS**


### 🏠 [Homepage](https://github.com/nour-karoui/encrypt-storage)

## Install

```sh
npm i storage-encryption
```

## How it works

* **The constructor of EncryptedStorage takes two arguments:**
    * **secret**(required): the secret key (a string) that we'll use in the encryption
    * **storageType**(optional): localStorage / sessionStorage.
     storageType is localStorage by default.
     
* **Methods provided by encryptedStorage:**
    * **encryptObject**(storage_key, data): void
    * **decryptObject**(storage_key): JSON Object
    * **encryptString**(storage_key, data): void
    * **decryptString**(storage_key): string
    * **remove**(storage_key): void

## Encrypt Local/Session Storage (For Typescript)

```ts
import {EncryptStorage} from '@storage-encryption/storage-encryption';

// the constructor takes the secret key as a first parameter and an optional
// second parameter as the storage type
// if none is provided it'll be localStorage by default
const encryptStorage = new EncryptStorage(SECRET_KEY, 'sessionStorage');
encryptStorage.encryptObject('storage_key', {first: 'hello world'});
const objectValue = encryptStorage.decryptObject('storage_key');

encryptStorage.encryptString('storage_key', 'Hello world');
const stringValue = encryptStorage.decryptString('storage_key');

encryptStorage.removeElement('storage_key');    
```

## Encrypt Local/Session Storage (For Javascript)
```js
const { EncryptStorage } = require('@storage-encryption/storage-encryption')

const encryptStorage = new EncryptStorage(SECRET_KEY, 'localStorage');
encryptStorage.encryptObject('storage_key', {first: 'hello world'});
const objectValue = encryptStorage.decryptObject('storage_key');

encryptStorage.encryptString('storage_key', 'Hello world');
const stringValue = encryptStorage.decryptObject('storage_key');

encryptStorage.removeElement('storage_key'); 
```

## A BETTER WAY TO DO IT
* **Instantiate the encryptStorage object in a shared folder and export it**
* **So you won't have to instantiate it in each file**

````ts
import EncryptStorage from 'encrypt-storage';

export const encryptSessionStorage = EncryptStorage(SECRET_KEY, 'sessionStorage');
export const encryptLocalStorage = EncryptStorage(SECRET_KEY);

````
## Author

👤 **Nour**

* Github: [@nour-karoui](https://github.com/nour-karoui)
* LinkedIn: [@nourkaroui](https://www.linkedin.com/in/nourkaroui/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/nour-karoui/encrypt-storage/issues). You can also take a look at the [contributing guide](https://github.com/nour-karoui/encrypt-storage/blob/master/CONTRIBUTING.md).

## Show your support

Give a STAR if this project helped you!

## 📝 License

* Copyright © 2021 [Nour](https://github.com/nour-karoui).
* This project is [MIT](https://github.com/nour-karoui/encrypt-storage/blob/master/LICENSE) licensed.

***
_This README was generated with by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
