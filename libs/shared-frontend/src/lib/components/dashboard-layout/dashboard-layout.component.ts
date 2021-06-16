import { Component } from '@angular/core';

@Component({
  selector: 'syncspace-crypto-analysis-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent {
  isOpen = false;

  openSidebar(): void {
    this.isOpen = true;
  }

  closeSidebar(): void {
    this.isOpen = false;
  }

}
