import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { PopupCadastroMedicamentoComponent } from '../popup-cadastro-medicamento/popup-cadastro-medicamento.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private route: ActivatedRoute) {}

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

  home(): void{
    this.router.navigate(['/'], { relativeTo: this.route });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupCadastroMedicamentoComponent, {  
      panelClass: 'custom-dialog-container-cadastro'  
    });

    dialogRef.afterClosed().subscribe(result => {   
        
   
    });
  } 

}
