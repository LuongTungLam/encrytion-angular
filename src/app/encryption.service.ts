import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  key: any = 'C50340E2C2F6CE007186FE6E4D22E589C50869710913B468B1FF10A0AA9A4622';

  // ENCRYPTION USING CBC TRIPLE DES
  encryptUsingTripleDES(res: any, typeObj: boolean): string {
    const data = typeObj ? JSON.stringify(res) : res;
    const keyMD5 = CryptoJS.MD5(this.key).toString();
    const keyHex = CryptoJS.enc.Utf8.parse(keyMD5);
    const mode = CryptoJS.mode.ECB;
    const encrypted = CryptoJS.TripleDES.encrypt(data, keyHex, { mode });
    return encrypted.toString();
  }

  // DECRYPTION USING CBC TRIPLE DES
  decryptUsingTripleDES(encrypted: string): string {
    const keyMD5 = CryptoJS.MD5(this.key).toString();
    const keyHex = CryptoJS.enc.Utf8.parse(keyMD5);
    const mode = CryptoJS.mode.ECB;
    const decrypted = CryptoJS.TripleDES.decrypt(encrypted, keyHex, { mode });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  encryptUsingSHA256(text: string): string {
    const keySHA256 = CryptoJS.SHA256(text).toString();
    // console.log(keySHA256)
    return keySHA256;
  }
}
