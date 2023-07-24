import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-popup-cadastro-medicamento',
  templateUrl: './popup-cadastro-medicamento.component.html',
  styleUrls: ['./popup-cadastro-medicamento.component.scss']
})
export class PopupCadastroMedicamentoComponent {
  dosagemTipo: boolean = false;
  duracao = 8;
  editMode = false;
  constructor(
    public dialogRef: MatDialogRef<PopupCadastroMedicamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {element: any , editMode: any},
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private medicamentosService: MedicamentosService
  ) {}

  ngOnInit(): void {
    this.editMode = this.data.editMode;
    if(this.editMode === true){
      this.buscarMedicamento(this.data.element.id)
    }
  }

  formMedicamento = this.formBuilder.group({
    id: 0,
    nome: ['', Validators.required],
    medicamentoUso: ['', Validators.required],
    tipo: ['', Validators.required],
    dosagemTipo: ['', Validators.required],
    modoDeUso: ['', Validators.required],
    quantidadeMg: this.formBuilder.array([this.formBuilder.control('', Validators.required)]),
    quantidadeMl: this.formBuilder.array([this.formBuilder.control('', Validators.required)]),
    quantidadeMgKg: [0, Validators.required],
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
    if (this.formMedicamento.invalid) {
      this.openSnackBar()
      // Marcar todos os campos como tocados para exibir mensagens de erro
      this.markFormGroupAsTouched(this.formMedicamento);
      return;
    }

    console.log(this.formMedicamento.value);
    this.dialogRef.close(this.formMedicamento.value);

  }

  formDosagemTipo(event: any){  
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
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupAsTouched(control);
      }
    });
  }
 
buscarMedicamento(id: any){
  this.medicamentosService.Get(id).subscribe((response: any) => {    
    console.log(response)
    this.convertStringToArray(response, 'contraIndicacao', 'indicacao');
    this.convertStringToArray(response, 'quantidadeMg', 'quantidadeMl');
    console.log(response)

    if(response.dosagemTipo === "mg/kg/dia"){

      this.dosagemTipo = true;
    }
    else{
      this.dosagemTipo = false;
    }

    this.formMedicamento.patchValue({
      id: id,
      nome: response.nome,
      medicamentoUso: response.medicamentoUso,
      tipo: response.tipo,
      dosagemTipo: response.dosagemTipo,
      modoDeUso: response.modoDeUso,
      quantidadeMgKg: response.quantidadeMgKg,
      quantidadeSoro: response.quantidadeSoro,
      numeroDoses: response.numeroDoses,
      quantidadeAmpolas: response.quantidadeAmpolas,
    });

    this.setQuantidadeMg(response.quantidadeMg);
    this.setQuantidadeMl(response.quantidadeMl);
    this.setArrayValues('indicacoes', response.indicacao);
    this.setArrayValues('contraIndicacoes', response.contraIndicacao);
  
  });
}

convertStringToArray(obj: any, ...properties: string[]): void {
  properties.forEach((prop) => {
    if (obj[prop] && typeof obj[prop] === 'string') {
      obj[prop] = obj[prop].split('\\*').map((item: string) => item.trim());
    }
  });
}

setQuantidadeMg(quantidadesMg: string[]): void {
  const quantidadeMgArray = this.formMedicamento.get('quantidadeMg') as FormArray;
  quantidadeMgArray.clear();
  quantidadesMg.forEach((mg) => quantidadeMgArray.push(this.formBuilder.control(mg, Validators.required)));
}

setQuantidadeMl(quantidadesMl: string[]): void {
  const quantidadeMlArray = this.formMedicamento.get('quantidadeMl') as FormArray;
  quantidadeMlArray.clear();
  quantidadesMl.forEach((ml) => quantidadeMlArray.push(this.formBuilder.control(ml, Validators.required)));
}

setArrayValues(arrayName: string, values: string[]): void {
  const formArray = this.formMedicamento.get(arrayName) as FormArray;
  formArray.clear();
  values.forEach((value) => formArray.push(this.formBuilder.control(value, Validators.required)));
}

}
