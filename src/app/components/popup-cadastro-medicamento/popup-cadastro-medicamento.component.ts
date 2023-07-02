import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-cadastro-medicamento',
  templateUrl: './popup-cadastro-medicamento.component.html',
  styleUrls: ['./popup-cadastro-medicamento.component.scss']
})
export class PopupCadastroMedicamentoComponent {
  constructor(public dialogRef: MatDialogRef<PopupCadastroMedicamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
}
