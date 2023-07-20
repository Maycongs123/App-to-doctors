import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-confirmacao',
  templateUrl: './popup-confirmacao.component.html',
  styleUrls: ['./popup-confirmacao.component.scss']
})
export class PopupConfirmacaoComponent {
  constructor(public dialogRef: MatDialogRef<PopupConfirmacaoComponent>) {}

  confirmacao(event: any){
    this.dialogRef.close(event);
  }
}
