import { Component, OnInit } from '@angular/core';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'syncspace-crypto-analysis-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  env = env;

  constructor() { }

  ngOnInit(): void {
  }

}
