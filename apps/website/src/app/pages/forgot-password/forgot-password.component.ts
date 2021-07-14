import { Component, OnInit } from '@angular/core';
import { environment as env } from '../../../environments/environment';
@Component({
  selector: 'syncspace-crypto-analysis-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  env = env;

  constructor() { }

  ngOnInit(): void {
  }

}
