import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'syncspace-crypto-analysis-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() isOpen: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
