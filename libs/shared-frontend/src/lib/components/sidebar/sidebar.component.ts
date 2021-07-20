import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'syncspace-crypto-analysis-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() logout: EventEmitter<boolean> =  new EventEmitter<boolean>();
  @Input() isOpen: boolean;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() profileImage: string;
  
  onLogout(): void {
    this.logout.emit(true);
  }

}
