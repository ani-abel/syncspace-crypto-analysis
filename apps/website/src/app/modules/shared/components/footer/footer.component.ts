import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'syncspace-crypto-analysis-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() userAppUrl: string;
  year: number;

  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

}
