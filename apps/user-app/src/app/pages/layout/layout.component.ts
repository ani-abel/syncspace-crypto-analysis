/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../modules/shared/services/shared.service';

@Component({
  selector: 'syncspace-crypto-analysis-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isOpen = false;

  constructor(
    private readonly sharedSrv: SharedService,
  ) { }

  ngOnInit(): void {
  }

  openSidebar(): void {
    this.isOpen = true;
  }

  closeSidebar(): void {
    this.isOpen = false;
  }

  onLogout(event: boolean): void {
    this.sharedSrv.onLogout();
  }

}
