import { Component, Output, EventEmitter, Input } from '@angular/core';
import { User } from '@syncspace-crypto-analysis/graphql-config';

@Component({
  selector: 'syncspace-crypto-analysis-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent {
  @Output() logout: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() user: Partial<User>;
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
