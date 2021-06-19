import { Component, Input } from '@angular/core';

@Component({
  selector: 'syncspace-crypto-analysis-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent {
  @Input() isOpen: boolean;


}
