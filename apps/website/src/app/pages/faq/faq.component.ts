import { Component, OnInit } from '@angular/core';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'syncspace-crypto-analysis-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  env = env;

  constructor() { }

  ngOnInit(): void {
  }

}
