import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'syncspace-crypto-analysis-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.scss']
})
export class NavSidebarComponent implements OnInit {
  @Output() closeNavbar: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() userAppUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClose(event: any): void {
    this.closeNavbar.emit(true);
  }

}
