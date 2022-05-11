import { Component, OnInit } from '@angular/core';
import { EncryptionService } from './encryption.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private encryption: EncryptionService) {}

  ngOnInit() {
    // const data = {
    //   fullname: 'Lương Tùng Lâm',
    //   email: '',
    //   username: 'lamlt99',
    //   password:
    //     '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    //   secretQuestion: '1',
    //   secretAnswer:
    //     'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad',
    //   transaction_id: 'ec7fcbc8-ce02-494a-87a8-6c93e6db427d',
    // };
    // const data = {
    //   username: 'lamlt99',
    //   password:
    //     '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    // };
    const data = {
      area_type: 'T',
      parent_code: '',
    };
    // const data = {
    //   ws_code: 'PER',
    // };
    // const data = {
    //   mobile: '84819999999',
    // };
    // const data = {
    //   transaction_id: 'ec7fcbc8-ce02-494a-87a8-6c93e6db427d',
    // };
    // const data = {
    //   transaction_id: 'ec7fcbc8-ce02-494a-87a8-6c93e6db427d',
    //   otp: '629346',
    // };
    // // DES
    const encrypted = this.encryption.encryptUsingTripleDES(data, true);
    console.log(encrypted);
    const decrypted = this.encryption.decryptUsingTripleDES(encrypted);
    console.log(decrypted);
    this.encryption.encryptUsingSHA256('abc');
  }
}
