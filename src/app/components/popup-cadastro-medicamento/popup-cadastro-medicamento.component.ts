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
  isRenal: boolean = false;
  isPediatrico: boolean = false;
  isAlteracaoFaixas: string = '';
  duracao = 8;
  editMode = false;
  step = 0;

  alteracaoValorFaixas = [  
    {value: "Ambos", viewValue: "Modificar ambos valores"},
    {value: "ApenasDose", viewValue: "Modificar apenas a dosagem"},
    {value: "ApenasUso", viewValue: "Modificar apenas o modo de uso"}
  ]

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
    calculoRenal: ['Não', Validators.required],  
    alteracaoValorFaixas: [''],
    dosagemMaxima: [0, Validators.required],
    variacaoMinimaDosagemMaxima: [0],
    variacaoMaximaDosagemMaxima: [0],
    valor_1_ClearanceCreatinina: [0],
    valor_2_ClearanceCreatinina: [0],
    valor_3_ClearanceCreatinina: [0],
    valor_1_Porcetagem_ClearanceCreatinina: [0],
    valor_2_Porcetagem_ClearanceCreatinina: [0],
    valor_3_Porcetagem_ClearanceCreatinina: [0],
    faixa_1_HorarioClCr: [''],
    faixa_2_HorarioClCr: [''],
    faixa_Hemodialise_Horario: [''],
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
    dose: this.formBuilder.array([
      this.formBuilder.group({
        problema: ['', Validators.required],
        usoDose: this.formBuilder.group({
          usoInicial: [''],
          usoManutencao: [''],
        })
      })
    ]),
    preparoDiluicao: this.formBuilder.array([this.formBuilder.control('', Validators.required)]),
    administracao: this.formBuilder.array([this.formBuilder.control('', Validators.required)]),
    usoGestacao: this.formBuilder.array([this.formBuilder.control('', Validators.required)])
  });

  getDoseFormGroup(index: number): FormGroup {
    return this.dose.at(index) as FormGroup;
  }

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
    // const doseForm = this.formBuilder.control('');
    // this.dose.push(doseForm);
    const newDoseFormGroup = this.formBuilder.group({
      problema: ['', Validators.required],
      usoDose: this.formBuilder.group({
        usoInicial: [''],
        usoManutencao: [''],
      })
    });
    this.dose.push(newDoseFormGroup);
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
    this.contraIndicacoes.removeAt(index);
  }

  removerCampoIndicacao(index: number): void {    
    this.indicacoes.removeAt(index);
  }

  removerCampoMg(index: number): void {    
    this.quantidadeMg.removeAt(index);
  }

  removerCampoMl(index: number): void {    
    this.quantidadeMl.removeAt(index);
  }

  removerCampoPreparoDiluicao(index: number): void {    
    this.preparoDiluicao.removeAt(index);
  }

  removerCampoDose(index: number): void {    
    this.dose.removeAt(index);
  }

  removerCampoUsoGestacao(index: number): void {    
    this.usoGestacao.removeAt(index);
  }

  removerCampoAdministracao(index: number): void {   
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
   
    this.dialogRef.close(this.formMedicamento.value);

  }

  formPediatrico(event: any){    
    if(event.value === "Pediátrico"){

      this.isPediatrico = true;
    }
    else{
      this.isPediatrico = false;
    }
  }

  formDosagemTipo(event: any){    
    if(event.value === "mg/kg/dia"){

      this.dosagemTipo = true;
    }
    else{
      this.dosagemTipo = false;
    }
  }

  formCalculoRenal(event: any){    
    if(event.value === "Sim"){
      this.isRenal = true;
    }
    else{
      this.isRenal = false;
    }
  }

  formAlteracaoValorFaixas(event: any){
    this.isAlteracaoFaixas = event.value;
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
    if(response.dosagemTipo === "mg/kg/dia" && response.calculoRenal === "Sim"){
      this.isAlteracaoFaixas = response.alteracaoValorFaixas;
      this.dosagemTipo = true;
      this.isRenal = true;
    }
    else{
      this.dosagemTipo = false;
    }

    this.formMedicamento.patchValue({
      id: id,
      nome: response.nome,
      medicamentoUso: response.medicamentoUso,
      calculoRenal: response.calculoRenal,
      alteracaoValorFaixas: response.alteracaoValorFaixas,
      dosagemMaxima: response.dosagemMaxima,
      variacaoMinimaDosagemMaxima: response.variacaoMinimaDosagemMaxima,
      variacaoMaximaDosagemMaxima: response.variacaoMaximaDosagemMaxima,
      valor_1_ClearanceCreatinina: response.valor_1_ClearanceCreatinina,
      valor_2_ClearanceCreatinina: response.valor_2_ClearanceCreatinina,
      valor_3_ClearanceCreatinina: response.valor_3_ClearanceCreatinina,
      valor_1_Porcetagem_ClearanceCreatinina: response.valor_1_Porcetagem_ClearanceCreatinina,
      valor_2_Porcetagem_ClearanceCreatinina: response.valor_2_Porcetagem_ClearanceCreatinina,
      valor_3_Porcetagem_ClearanceCreatinina: response.valor_3_Porcetagem_ClearanceCreatinina,
      faixa_1_HorarioClCr: response.faixa_1_HorarioClCr,
      faixa_2_HorarioClCr: response.faixa_2_HorarioClCr,
      faixa_Hemodialise_Horario: response.faixa_Hemodialise_Horario,
      tipo: response.tipo,     
      dosagemTipo: response.dosagemTipo,
      modoDeUso: response.modoDeUso,
      quantidadeMgKg: response.quantidadeMgKg,
      quantidadeSoro: response.quantidadeSoro,
      numeroDoses: response.numeroDoses,
      quantidadeAmpolas: response.quantidadeAmpolas,
    });

    this.setItens('quantidadeMg', response.quantidadeMg)
    this.setItens('quantidadeMl', response.quantidadeMg)
    this.setItens('indicacoes', response.indicacao)
    this.setItens('contraIndicacoes', response.contraIndicacao)
    // this.setItens('dose', response.dose)
    this.setItens('preparoDiluicao', response.preparoDiluicao)
    this.setItens('administracao', response.administracao)
    this.setItens('usoGestacao', response.usoGestacao)
    this.setDoseItens(JSON.parse(response.dose));
  });
}


setItens( string: any ,dados: any[]): void {
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

setDoseItens(dados: any[]): void {
  const doseArray = this.formMedicamento.get('dose') as FormArray;
  doseArray.clear();

  if (typeof dados === 'string') {
    dados = JSON.parse(dados);
  }

  if (Array.isArray(dados)) {
    dados.forEach((dose: any) => {
      const doseFormGroup = this.formBuilder.group({
        problema: [dose.problema, Validators.required],
        usoDose: this.formBuilder.group({
          usoInicial: [dose.usoDose.usoInicial],
          usoManutencao: [dose.usoDose.usoManutencao],
        }),
      });

      doseArray.push(doseFormGroup);
    });
  }
}

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
