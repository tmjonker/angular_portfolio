import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailMessage } from '../model/email-message';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {

  contactForm!: FormGroup;
  sender!: string;
  subject!: string;
  message!: string;
  messageObject!: EmailMessage;
  contactService: ContactService
  

  constructor(contactService: ContactService) {
    this.generateForm();
    this.contactService = contactService;
  }

  ngOnInit(): void {}

  generateForm() {
    this.contactForm = new FormGroup({
      sender: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });

    
  }

  submitForm() {
    if (this.contactForm.valid) {

      this.messageObject = {
        sender: this.sender,
        subject: this.subject,
        msg: this.message
      };
      this.contactService.sendMsg(this.messageObject)

      this.clearForm();
    }
  }

  clearForm() {
    this.sender = "";
    this.subject = "";
    this.message = "";
  }
}

interface Message {

  
}