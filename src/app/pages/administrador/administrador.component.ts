import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Medicamento } from 'src/app/model/medicamento';
import { MedicamentosService } from 'src/app/services/medicamentos.service';
import { FormBuilder } from '@angular/forms';
import { PopupCadastroMedicamentoComponent } from 'src/app/components/popup-cadastro-medicamento/popup-cadastro-medicamento.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupConfirmacaoComponent } from 'src/app/components/popup-confirmacao/popup-confirmacao.component';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdministradorComponent {
  columnsToDisplay = ['Id', 'Nome', 'MedicamentoUso', 'Tipo', 'Dosagem', 'actions'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Medicamento[] = []
  dataSource: any = [];
  indicacoes: any = [];
  contraIndicacoes: any = [];
  dadosMedicamentos: any = [];
  dadosMedicao: any = [];

  constructor(
    private medicamentosService: MedicamentosService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getMedicamentos();
  }

  getMedicamentos() {
    this.medicamentosService.GetAll().subscribe((response: any) => {
      this.formMedicacaoTable(response)
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupCadastroMedicamentoComponent, {
      panelClass: 'custom-dialog-container-cadastro',
    });

    dialogRef.afterClosed().subscribe(result => {

      const medicamento = this.formMedicacao(result)
      this.adicionarMedicamento(medicamento.value)
    });
  }

  adicionarMedicamento(medicamento: any) {
    
    this.medicamentosService.Add(medicamento).subscribe({
      complete: () => {
        this.getMedicamentos();
      }
    });   
  }

  editarMedicamentoModal(element: any) { 
    const dialogRef = this.dialog.open(PopupCadastroMedicamentoComponent, {
      panelClass: 'custom-dialog-container-cadastro',
      data: { element: element, editMode: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      const medicamento = this.formMedicacao(result)
      this.editarMedicamento(medicamento)
    });
  }

  editarMedicamento(dados: any) {
    this.medicamentosService.update(dados.value).subscribe({
      complete: () => {
        this.getMedicamentos();
      }
    });  
  }

  deleteMedicamentoModal(dados: any): void {
    const dialogRef = this.dialog.open(PopupConfirmacaoComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {     
      if (result === true) {
        this.deleteMedicamento(dados.id)
      }
    });
  }

  deleteMedicamento(dados: any) {
    this.medicamentosService.delete(dados).subscribe({
      complete: () => {
        this.getMedicamentos();
      }
    });
  }

  formMedicacao(result: any) {   
      
    const indicacao = JSON.stringify(result.indicacoes);
    const contraIndicacao = JSON.stringify(result.contraIndicacoes);    
    const quantidadeMg = JSON.stringify(result.quantidadeMg);   
    const quantidadeMl = JSON.stringify(result.quantidadeMl);
    const dose = JSON.stringify(result.dose);
    const preparoDiluicao = JSON.stringify(result.preparoDiluicao);
    const administracao = JSON.stringify(result.administracao);
    const usoGestacao = JSON.stringify(result.usoGestacao);

    const formMedicamento = this.formBuilder.group({
      id: result.id,
      nome: result.nome,
      calculoRenal: result.calculoRenal,
      medicamentoUso: result.medicamentoUso,
      tipo: result.tipo,
      dosagemTipo: result.dosagemTipo,
      modoDeUso: result.modoDeUso,
      quantidadeMg: quantidadeMg,
      quantidadeMl: quantidadeMl,
      quantidadeMgKg: result.quantidadeMgKg,
      quantidadeSoro: result.quantidadeSoro,
      indicacao: indicacao,
      contraIndicacao: contraIndicacao,
      numeroDoses: result.numeroDoses,
      quantidadeAmpolas: result.quantidadeAmpolas,
      dose: dose,
      preparoDiluicao: preparoDiluicao,
      administracao: administracao,
      usoGestacao: usoGestacao
    });

    return formMedicamento;
  }

  formMedicacaoTable(result: any) {    
    this.dataSource = [];

    for (let index = 0; index < result.length; index++) {     
      const medicamento = {
        id: result[index].id,
        nome: result[index].nome,
        calculoRenal: result[index].calculoRenal,
        medicamentoUso: result[index].medicamentoUso,
        tipo: result[index].tipo,
        dosagemTipo: result[index].dosagemTipo,
        modoDeUso: result[index].modoDeUso,
        quantidadeMg: JSON.parse(result[index].quantidadeMg),
        quantidadeMl: JSON.parse(result[index].quantidadeMl),       
        quantidadeMgKg: result[index].quantidadeMgKg,
        quantidadeSoro: result[index].quantidadeSoro,        
        indicacao: JSON.parse(result[index].indicacao),
        contraIndicacao: JSON.parse(result[index].contraIndicacao),
        numeroDoses: result[index].numeroDoses,
        quantidadeAmpolas: result[index].quantidadeAmpolas,
        dose: JSON.parse(result[index].dose),
        preparoDiluicao: JSON.parse(result[index].preparoDiluicao),
        administracao: JSON.parse(result[index].administracao),
        usoGestacao: JSON.parse(result[index].usoGestacao)
      };
     
      this.dataSource.push(medicamento);
    }  
  }
}








