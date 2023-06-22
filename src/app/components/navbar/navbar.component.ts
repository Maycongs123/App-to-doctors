import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private elementRef: ElementRef) {}

  panelOpenState = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const nav = this.elementRef.nativeElement.querySelector('#nav');
    
    if (window.pageYOffset > 90) {
      nav.style.background = '#fff';
    } else {
      nav.style.background = 'transparent';
    }
  }
  
}
