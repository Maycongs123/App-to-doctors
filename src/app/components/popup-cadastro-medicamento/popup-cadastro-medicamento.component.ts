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
    contraIndicacao: '',
    contraIndicacoes: this.formBuilder.array([this.formBuilder.control('')]),
  });

  get contraIndicacoes() {
    return this.formMedicamento.get('contraIndicacoes') as FormArray;
  }

  adicionarCampo() {
    debugger
    const contraIndicacoesForm = this.formBuilder.control('');
    this.contraIndicacoes.push(contraIndicacoesForm);
  }

  removerCampo(index: number): void {
    this.contraIndicacoes.removeAt(index);
  }

  adicionar(): void {
    debugger
    console.log(this.formMedicamento.value)
    this.dialogRef.close(this.formMedicamento.value);
  }

  submit() {
    console.log(this.formMedicamento.value);
    console.log(this.form.value);
  }

  form = this.formBuilder.group({
    name: '',
    lessons: this.formBuilder.array([this.formBuilder.control('')]),
  });

  get lessons() {
    return this.form.get('lessons') as FormArray;
  }

  addLesson() {
    const lessonForm = this.formBuilder.control('');
    this.lessons.push(lessonForm);
  }

}
