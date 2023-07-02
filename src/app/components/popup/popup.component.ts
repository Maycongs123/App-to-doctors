import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  constructor(public dialogRef: MatDialogRef<PopupComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  
  adulto: any = "Adulto"
  pediatria: any = "Pediatrico"

  onNoClick(value: any) {
    debugger
    
    if(value === "Adulto"){
      localStorage.setItem('tipoAtendimento', value);
      return
    }
    if(value === "Pediatrico"){
      localStorage.setItem('tipoAtendimento', value);
      return
    }    
   
    this.dialogRef.close();
  }  
}
