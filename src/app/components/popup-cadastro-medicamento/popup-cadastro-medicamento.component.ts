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
    debugger
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
    dose: this.formBuilder.array([this.formBuilder.control('', Validators.required)]),
    preparoDiluicao: this.formBuilder.array([this.formBuilder.control('', Validators.required)]),
    administracao: this.formBuilder.array([this.formBuilder.control('', Validators.required)]),
    usoGestacao: this.formBuilder.array([this.formBuilder.control('', Validators.required)])
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

  get dose() {
    return this.formMedicamento.get('dose') as FormArray;
  }
  
  get preparoDiluicao() {
    return this.formMedicamento.get('preparoDiluicao') as FormArray;
  }
  
  get administracao() {
    return this.formMedicamento.get('administracao') as FormArray;
  }

  get usoGestacao() {
    return this.formMedicamento.get('usoGestacao') as FormArray;
  }


  // REFATORAR OS CAMPOS ADICIONAR E REMOVER 

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
  
  adicionarCampoDose() {
    const doseForm = this.formBuilder.control('');
    this.dose.push(doseForm);
  }
  
  adicionarCampoPreparoDiluicao() {
    const preparoDiluicaoForm = this.formBuilder.control('');
    this.preparoDiluicao.push(preparoDiluicaoForm);
  }

  adicionarCampoAdministracao() {
    const administracaoForm = this.formBuilder.control('');
    this.administracao.push(administracaoForm);
  }

  adicionarCampoUsoGestacao() {
    const usoGestacaoForm = this.formBuilder.control('');
    this.usoGestacao.push(usoGestacaoForm);
  }

  removerCampoContraIndicacoes(index: number): void {
    debugger
    this.contraIndicacoes.removeAt(index);
  }

  removerCampoIndicacao(index: number): void {
    debugger
    this.indicacoes.removeAt(index);
  }

  removerCampoMg(index: number): void {
    debugger
    this.quantidadeMg.removeAt(index);
  }

  removerCampoMl(index: number): void {
    debugger
    this.quantidadeMl.removeAt(index);
  }

  removerCampoPreparoDiluicao(index: number): void {
    debugger
    this.preparoDiluicao.removeAt(index);
  }

  removerCampoDose(index: number): void {
    debugger
    this.dose.removeAt(index);
  }

  removerCampoUsoGestacao(index: number): void {
    debugger
    this.usoGestacao.removeAt(index);
  }

  removerCampoAdministracao(index: number): void {
    debugger
    this.administracao.removeAt(index);
  }

  adicionar() {
    this.submit();
  }

  submit() {
    if (this.formMedicamento.invalid) {
      this.openSnackBar()
      this.markFormGroupAsTouched(this.formMedicamento);
      return;
    }
    debugger
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


    // this.setQuantidadeMg(response.quantidadeMg);
    // this.setQuantidadeMl(response.quantidadeMl);
    // this.setIndicacoes(response.indicacao);
    // this.setContraIndicacoes(response.contraIndicacao);
    // this.setDose(response.dose);
    // this.setPreparoDiluicao(response.preparoDiluicao);
    // this.setAdministracao(response.administracao);
    // this.setUsoGestacao(response.usoGestacao);

    // Realizar teste quando estiver o back estiver pronto

    this.teste('quantidadeMg', response.quantidadeMg)
    this.teste('quantidadeMl', response.quantidadeMg)
    this.teste('indicacao', response.indicacao)
    this.teste('contraIndicacao', response.contraIndicacao)
    this.teste('dose', response.dose)
    this.teste('preparoDiluicao', response.preparoDiluicao)
    this.teste('administracao', response.administracao)
    this.teste('usoGestacao', response.usoGestacao)
  
  });
}

// Realizar teste quando estiver o back estiver pronto
teste( string: any ,dados: any[]): void {
  debugger
  const dadosArray = this.formMedicamento.get(string) as FormArray;
  dadosArray.clear();
  
  if (typeof dados === 'string') {
    dados = JSON.parse(dados); 
  }

  if (Array.isArray(dados)) {
    dados.forEach((value: any) => {
      dadosArray.push(this.formBuilder.control(value, Validators.required));
    });
  }
}

setQuantidadeMg(quantidadeMg: any[]): void {
  const quantidadeMgArray = this.formMedicamento.get('quantidadeMg') as FormArray;
  quantidadeMgArray.clear();
  
  if (typeof quantidadeMg === 'string') {
    quantidadeMg = JSON.parse(quantidadeMg); 
  }

  if (Array.isArray(quantidadeMg)) {
    quantidadeMg.forEach((mgValue: number) => {
      quantidadeMgArray.push(this.formBuilder.control(mgValue, Validators.required));
    });
  }
}

setQuantidadeMl(quantidadesMl: any[]): void {  
  const quantidadeMlArray = this.formMedicamento.get('quantidadeMl') as FormArray;
  quantidadeMlArray.clear();

  if (typeof quantidadesMl === 'string') {
    quantidadesMl = JSON.parse(quantidadesMl); 
  }

  if (Array.isArray(quantidadesMl)) {
    quantidadesMl.forEach((mgValue: number) => {
      quantidadeMlArray.push(this.formBuilder.control(mgValue, Validators.required));
    });
  }
}

setIndicacoes(indicacoes: any[]): void {  
  const indicacoesArray = this.formMedicamento.get('indicacoes') as FormArray;
  indicacoesArray.clear();

  if (typeof indicacoes === 'string') {
    indicacoes = JSON.parse(indicacoes); 
  }

  if (Array.isArray(indicacoes)) {
    indicacoes.forEach((mgValue: number) => {
      indicacoesArray.push(this.formBuilder.control(mgValue, Validators.required));
    });
  }
}


setContraIndicacoes(contraIndicacoes: any[]): void {  
  const contraIndicacoesArray = this.formMedicamento.get('contraIndicacoes') as FormArray;
  contraIndicacoesArray.clear();

  if (typeof contraIndicacoes === 'string') {
    contraIndicacoes = JSON.parse(contraIndicacoes); 
  }

  if (Array.isArray(contraIndicacoes)) {
    contraIndicacoes.forEach((mgValue: number) => {
      contraIndicacoesArray.push(this.formBuilder.control(mgValue, Validators.required));
    });
  }
}


setDose(dose: any[]): void {  
  const doseArray = this.formMedicamento.get('dose') as FormArray;
  doseArray.clear();

  if (typeof dose === 'string') {
    dose = JSON.parse(dose); 
  }

  if (Array.isArray(dose)) {
    dose.forEach((mgValue: number) => {
      doseArray.push(this.formBuilder.control(mgValue, Validators.required));
    });
  }
}


setPreparoDiluicao(preparoDiluicao: any[]): void {  
  const preparoDiluicaoArray = this.formMedicamento.get('preparoDiluicao') as FormArray;
  preparoDiluicaoArray.clear();

  if (typeof preparoDiluicao === 'string') {
    preparoDiluicao = JSON.parse(preparoDiluicao); 
  }

  if (Array.isArray(preparoDiluicao)) {
    preparoDiluicao.forEach((mgValue: number) => {
      preparoDiluicaoArray.push(this.formBuilder.control(mgValue, Validators.required));
    });
  }
}


setAdministracao(administracao: any[]): void {  
  const administracaoArray = this.formMedicamento.get('administracao') as FormArray;
  administracaoArray.clear();

  if (typeof administracao === 'string') {
    administracao = JSON.parse(administracao); 
  }

  if (Array.isArray(administracao)) {
    administracao.forEach((mgValue: number) => {
      administracaoArray.push(this.formBuilder.control(mgValue, Validators.required));
    });
  }
}


setUsoGestacao(usoGestacao: any[]): void {  
  const usoGestacaoArray = this.formMedicamento.get('usoGestacao') as FormArray;
  usoGestacaoArray.clear();

  if (typeof usoGestacao === 'string') {
    usoGestacao = JSON.parse(usoGestacao); 
  }

  if (Array.isArray(usoGestacao)) {
    usoGestacao.forEach((mgValue: number) => {
      usoGestacaoArray.push(this.formBuilder.control(mgValue, Validators.required));
    });
  }
}


}
