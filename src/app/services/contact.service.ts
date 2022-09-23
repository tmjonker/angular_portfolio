import { Injectable } from '@angular/core';
import { EmailMessage } from '../model/email-message'

declare var require: any;

const axios = require('axios').default;

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  sendMsg(emailMessage: EmailMessage) {

    axios.post("http://tmjonkerbackend-env.eba-3xyndxs6.us-east-1.elasticbeanstalk.com/contact", emailMessage)
      .then(function (response: any) {
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      })
  }
}
