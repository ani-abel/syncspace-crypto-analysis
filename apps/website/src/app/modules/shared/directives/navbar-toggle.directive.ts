/* eslint-disable @typescript-eslint/no-empty-function */
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[syncspaceCryptoAnalysisNavbarToggle]',
  exportAs: 'syncspaceCryptoAnalysisNavbarToggle'
})
export class NavbarToggleDirective {
  isOpen = false;

  constructor() { }

  @HostListener('click')
  toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
