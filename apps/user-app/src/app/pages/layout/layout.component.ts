import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'syncspace-crypto-analysis-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @Output() stopPropagation: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  onStopPropagation(event: MouseEvent): void {
    this.stopPropagation.emit(event);
  }

}
