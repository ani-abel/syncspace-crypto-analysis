import { Component, OnInit } from '@angular/core';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'syncspace-crypto-analysis-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  env  = env;

  constructor() { }

  ngOnInit(): void {
  }

}
