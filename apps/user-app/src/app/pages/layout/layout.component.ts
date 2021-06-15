import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'syncspace-crypto-analysis-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openSidebar(): void {
    this.isOpen = true;
  }

  closeSidebar(): void {
    this.isOpen = false;
  }

}
