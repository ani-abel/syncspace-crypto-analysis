import { Component } from '@angular/core';

@Component({
  selector: 'syncspace-crypto-analysis-admin-dashboard-layout',
  templateUrl: './admin-dashboard-layout.component.html',
  styleUrls: ['./admin-dashboard-layout.component.scss']
})
export class AdminDashboardLayoutComponent {
  isOpen = false;

  openSidebar(): void {
    this.isOpen = true;
  }

  closeSidebar(): void {
    this.isOpen = false;
  }

}
