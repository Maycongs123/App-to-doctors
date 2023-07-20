import { Component, HostListener, ElementRef, OnInit, OnDestroy, ApplicationRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PopupComponent } from 'src/app/components/popup/popup.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private appRef: ApplicationRef,
    private router: Router) {}

  atendimento: any;
  imagem: any;

  goToItems() {
   this.router.navigate(['/lista-antibiotico'], { relativeTo: this.route });
  }

  ngOnInit(){
    this.openDialog();
    const popupShown = localStorage.getItem('popupShown');
    if (!popupShown) {
      localStorage.setItem('popupShown', 'true');
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {

     this.atendimento = localStorage.getItem('tipoAtendimento');

     if(this.atendimento === "Adulto"){
      this.imagem = true;
     }else{
      this.imagem = false;
     }
    });
  }
}
