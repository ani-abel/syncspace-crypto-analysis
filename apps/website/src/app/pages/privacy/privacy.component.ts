import { Component, OnInit } from '@angular/core';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'syncspace-crypto-analysis-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {
  env = env;

  constructor() { }

  ngOnInit(): void {
  }

}
