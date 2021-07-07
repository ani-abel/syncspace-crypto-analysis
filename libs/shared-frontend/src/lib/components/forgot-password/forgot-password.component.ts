import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'syncspace-crypto-analysis-forgot-password-abstract',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  @Output()
  userEmail: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  resetEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  forgotPasswordForm: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(null, Validators.compose([
        Validators.email,
        Validators.required
      ]))
    })
  }

  onSubmit(): void {
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    this.userEmail.emit(this.forgotPasswordForm.value.email);
    this.resetEvent.emit(this.forgotPasswordForm);
  }

}
