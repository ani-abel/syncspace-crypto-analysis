import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'syncspace-crypto-analysis-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent {
  @Output() logout: EventEmitter<boolean> = new EventEmitter<boolean>();
  isOpen = false;

  openSidebar(): void {
    this.isOpen = true;
  }

  closeSidebar(): void {
    this.isOpen = false;
  }

  onLogout(event: boolean): void {
    this.logout.emit(event);
  }

}
