import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private elementRef: ElementRef,private router: Router, private activatedRoute: ActivatedRoute) {}

  rotaAtual = ""

  panelOpenState = false;

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.rotaAtual = this.activatedRoute?.root?.firstChild?.snapshot?.routeConfig?.path ?? ""
        this.onWindowScroll();
      });
  }

  @HostListener('window:scroll', [])  
  onWindowScroll(){
    const nav = this.elementRef.nativeElement.querySelector('#nav');
   
    if (this.rotaAtual === "" && window.scrollY > 90) {
      nav.style.background = '#fff';
      return
    } 
    
    if(this.rotaAtual){
      nav.style.background = '#fff';
      return
    }
    nav.style.background = 'transparent';
  }

}
