import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {

  contactForm!: FormGroup;
  fullName!: string;
  emailAddress!: string;
  message!: string;
  messageObject!: Message;
  

  constructor() {
    this.generateForm();
  }

  ngOnInit(): void {}

  generateForm() {
    this.contactForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });

    
  }

  submitForm() {
    if (this.contactForm.valid) {

      this.messageObject = {
        name: this.fullName,
        email: this.emailAddress,
        msg: this.message
      };

      console.log(this.messageObject.email);
    }
  }
}

interface Message {

  name: string;
  email: string;
  msg: string;
}