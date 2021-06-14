import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'syncspace-crypto-analysis-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: number;

  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

}
