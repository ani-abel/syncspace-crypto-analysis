import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { CreateContactMessageGQL } from '@syncspace-crypto-analysis/graphql-config';
import { GraphqlRequestsService } from '@syncspace-crypto-analysis/graphql-requests';
import { SubSink } from 'subsink';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'syncspace-crypto-analysis-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements 
OnInit,
OnDestroy {
  subSink: SubSink = new SubSink();
  contactMessageForm: FormGroup;
  env = env;

  constructor(
    private readonly createContactMessageGraphQLSrv: CreateContactMessageGQL,
    private readonly toastController: ToastController,
    private readonly gqlRequestSrv: GraphqlRequestsService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    if(this.contactMessageForm.invalid) {
      return;
    }
    const { value: { name, email, message } } = this.contactMessageForm;
    
    this.subSink.sink =
    this.gqlRequestSrv.sendContactMessage({
      senderName: name,
      contactEmail: email,
      message
    }).subscribe(async (res) => {
      if (res.id) {
        this.contactMessageForm.reset();
        await this.displayMessage('Message sent');
      }
    });
      
  }

  async displayMessage(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      position: 'top',
    });
    toast.present();
  }


  private initForm(): void {
    this.contactMessageForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.email
      ])),
      message: new FormControl(null, Validators.required)
    });
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}
