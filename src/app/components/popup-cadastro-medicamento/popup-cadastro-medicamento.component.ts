import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-popup-cadastro-medicamento',
  templateUrl: './popup-cadastro-medicamento.component.html',
  styleUrls: ['./popup-cadastro-medicamento.component.scss']
})
export class PopupCadastroMedicamentoComponent {

  constructor(
    public dialogRef: MatDialogRef<PopupCadastroMedicamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  dosagemTipo: boolean = false;
  duracao = 8;

  formMedicamento = this.formBuilder.group({
    nome: ['', Validators.required],
    medicamentoUso: ['', Validators.required],
    tipo: ['', Validators.required],
    dosagemTipo: ['', Validators.required],
    modoDeUso: ['', Validators.required],
    quantidadeMg: this.formBuilder.array([this.formBuilder.control('', Validators.required)]),
    quantidadeMl: this.formBuilder.array([this.formBuilder.control('', Validators.required)]),
    quantidadeMgKg: ['', Validators.required],
    quantidadeSoro: [0,Validators.required],
    numeroDoses: [0, Validators.required],
    quantidadeAmpolas: [0, Validators.required],
    indicacoes: this.formBuilder.array([this.formBuilder.control('', Validators.required)]),
    contraIndicacoes: this.formBuilder.array([this.formBuilder.control('', Validators.required)]),
  });

  get contraIndicacoes() {
    return this.formMedicamento.get('contraIndicacoes') as FormArray;
  }

  get indicacoes() {
    return this.formMedicamento.get('indicacoes') as FormArray;
  }

  get quantidadeMg() {
    return this.formMedicamento.get('quantidadeMg') as FormArray;
  }

  get quantidadeMl() {
    return this.formMedicamento.get('quantidadeMl') as FormArray;
  }

  adicionarCampo() {
    const contraIndicacoesForm = this.formBuilder.control('');
    this.contraIndicacoes.push(contraIndicacoesForm);
  }

  adicionarCampoIndicacao() {
    const indicacoesForm = this.formBuilder.control('');
    this.indicacoes.push(indicacoesForm);
  }

  adicionarCampoQuantidadeMg() {
    const quantidadeMgForm = this.formBuilder.control('');
    this.quantidadeMg.push(quantidadeMgForm);
  }

  adicionarCampoQuantidadeMl() {
    const quantidadeMlForm = this.formBuilder.control('');
    this.quantidadeMl.push(quantidadeMlForm);
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
    // if (this.formMedicamento.invalid) {
    //   this.openSnackBar()
    //   // Marcar todos os campos como tocados para exibir mensagens de erro
    //   this.markFormGroupAsTouched(this.formMedicamento);
    //   return;
    // }

    console.log(this.formMedicamento.value);
    this.dialogRef.close(this.formMedicamento.value);

  }

  formDosagemTipo(event: any){
    debugger
    console.log(event.value)
    if(event.value === "mg/kg/dia"){

      this.dosagemTipo = true;
    }
    else{
      this.dosagemTipo = false;
    }
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.duracao * 1000,
    });
  }

  markFormGroupAsTouched(formGroup: FormGroup) {
    debugger
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupAsTouched(control);
      }
    });
  }
}
