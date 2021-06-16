/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[syncspaceCryptoAnalysisToggle]',
  exportAs: 'syncspaceCryptoAnalysisToggle'
})
export class ToggleDirective {
  isOpen = false;

  @HostListener('click', ['$event.target'])
  toggle(event: any): void {
    this.isOpen = !this.isOpen;
  }

}
