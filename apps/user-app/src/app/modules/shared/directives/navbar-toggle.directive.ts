/* eslint-disable @typescript-eslint/no-empty-function */
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[syncspaceCryptoAnalysisNavbarToggle]',
  exportAs: 'syncspaceCryptoAnalysisNavbarToggle'
})
export class NavbarToggleDirective {
  isOpen = false;

  constructor() {
    this.checkWindowSizeAsync();
  }

  @HostListener('click', ['$event.target'])
  toggle(event: any): void {
    this.isOpen = !this.isOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkWindowSizeAsync();
  }

  @HostListener('window:click', ['$event.target'])
  onWindowClick(event: any): void {
    // const sidebarNav: HTMLDivElement = document.querySelector('.side-bar-nav');
    // sidebarNav.addEventListener('click', (e) => {
    //   e.stopImmediatePropagation();
    //   return false;
    // })
    // console.log({ message: 'Continue the closure' });
    // if (this.isOpen === true) {
    //   this.isOpen = false;
    // }
  }

  @HostListener('stopPropagation', ['$event'])
  onStopPropagation(event: MouseEvent): void {
    console.log({event, hh: 'hi'});
    event.stopPropagation();
  }

  // @HostListener('click', ['$event'])
  // onStopPropagation(event: Event): void {
  //   console.log({ event });
  //   event.stopPropagation();
  // }

  private checkWindowSizeAsync(): void {
    if (window.innerWidth <= 800) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }
}
