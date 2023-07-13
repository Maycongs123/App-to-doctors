import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-cadastro-medicamento',
  templateUrl: './popup-cadastro-medicamento.component.html',
  styleUrls: ['./popup-cadastro-medicamento.component.scss']
})
export class PopupCadastroMedicamentoComponent {

  constructor(
    public dialogRef: MatDialogRef<PopupCadastroMedicamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {}

  formMedicamento = this.formBuilder.group({
    nome: '',
    medicamentoUso: '',
    tipo: '',
    modoDeUso: '',
    quantidadeMg: '',
    quantidadeMl: '',
    indicacoes: this.formBuilder.array([this.formBuilder.control('')]),
    contraIndicacoes: this.formBuilder.array([this.formBuilder.control('')]),
  });

  get contraIndicacoes() {
    return this.formMedicamento.get('contraIndicacoes') as FormArray;
  }

  get indicacoes() {
    return this.formMedicamento.get('indicacoes') as FormArray;
  }

  adicionarCampo() {
    const contraIndicacoesForm = this.formBuilder.control('');
    this.contraIndicacoes.push(contraIndicacoesForm);
  }

  adicionarCampoIndicacao() {
    const indicacoesForm = this.formBuilder.control('');
    this.indicacoes.push(indicacoesForm);
  }

  removerCampo(index: number): void {
    this.contraIndicacoes.removeAt(index);
  }

  removerCampoIndicacao(index: number): void {
    this.indicacoes.removeAt(index);
  }

  adicionar() {
    this.submit();
  }

  submit() {
    console.log(this.formMedicamento.value);
    this.dialogRef.close(this.formMedicamento.value);
  }
}
