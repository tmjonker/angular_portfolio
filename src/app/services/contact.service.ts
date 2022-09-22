import { Injectable } from '@angular/core';
import { EmailMessage } from '../model/email-message'

const axios = require('axios').default;

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  sendMsg(emailMessage: EmailMessage) {


  }
}
