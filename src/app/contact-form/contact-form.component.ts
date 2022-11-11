import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  checkoutForm = this.formBuilder.group({
    mail: '',
    subject: '',
    text: '',
  });

  constructor(
    private formBuilder : FormBuilder,
  ) { }

  alert = false;

  onSubmit(){
    if(!this.checkoutForm.value.mail || !this.checkoutForm.value.text)
    {
      this.alert = true;
      alert('Veuillez remplir les champs nécessaires')
    }
    else
    {
      this.alert = false;
      alert("Message envoyé depuis " + this.checkoutForm.value.mail + " !\n" +
            "Sujet : " + this.checkoutForm.value.subject + "\n" +
            "Message : " + this.checkoutForm.value.text);
      this.checkoutForm.reset();
    }
  }

}
