import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() {
    console.log("I am in");
  }

  processForm() {
    console.log("Success");
    }


}