import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'syncspace-crypto-analysis-loading',
  template: `
    <div class="backdrop">
      <div class="loader"></div>
    </div>
  `,
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
