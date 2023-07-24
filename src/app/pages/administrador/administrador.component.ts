import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
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
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdministradorComponent {  
  columnsToDisplay = ['Id','Nome', 'MedicamentoUso', 'Tipo', 'Dosagem', 'actions'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay,'expand'];
  expandedElement: Medicamento[] = []
  dataSource: any = [];
  indicacoes: any = [];
  contraIndicacoes: any = [];
  dadosMedicamentos: any = [];
  dadosMedicao:any = [];

  constructor(
    private medicamentosService: MedicamentosService, 
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    ){}

  ngOnInit(): void {
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

  adicionarMedicamento(medicamento : any){   
    this.medicamentosService.Add(medicamento).subscribe((response: any) => {
      console.log(response)
    });
    location.reload();
  }

  editarMedicamentoModal(element: any) {
    console.log(element)
    const dialogRef = this.dialog.open(PopupCadastroMedicamentoComponent, {
      panelClass: 'custom-dialog-container-cadastro',
      data: {element: element , editMode: true }      
    });

    dialogRef.afterClosed().subscribe(result => {   
      const medicamento = this.formMedicacao(result)
      this.editarMedicamento(medicamento)
    });
  }

  editarMedicamento(dados:any){ 
    this.medicamentosService.update(dados.value).subscribe();

    location.reload();
  }

  deleteMedicamentoModal(dados: any): void {
    const dialogRef = this.dialog.open(PopupConfirmacaoComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {       
      console.log(result)
      if(result === true){
        this.deleteMedicamento(dados.id)
      }
    });
  }
  
  deleteMedicamento(dados: any) {  
    this.medicamentosService.delete(dados).subscribe();

    location.reload();
  }

  formMedicacao(result: any){   
    const chavesIndicacao = Object.keys(result.indicacoes);
    const valoresIndicacao = chavesIndicacao.map(chave => result.indicacoes[chave]);
    const indicacao = valoresIndicacao.join("\\*");

    const chavesContraIndicacao = Object.keys(result.contraIndicacoes);
    const valoresContraIndicacao = chavesContraIndicacao.map(chave => result.contraIndicacoes[chave]);
    const contraIndicacao = valoresContraIndicacao.join("\\*");

    const chavesQuantidadeMg = Object.keys(result.quantidadeMg);
    const valoresQuantidadeMg = chavesQuantidadeMg.map(chave => result.quantidadeMg[chave]);
    const quantidadeMg = valoresQuantidadeMg.join("\\*");

    const chavesQuantidadeMl = Object.keys(result.quantidadeMl);
    const valoresQuantidadeMl = chavesQuantidadeMl.map(chave => result.quantidadeMl[chave]);
    const quantidadeMl = valoresQuantidadeMl.join("\\*");

    const formMedicamento = this.formBuilder.group({
      id: result.id,
      nome: result.nome,
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
      quantidadeAmpolas: result.quantidadeAmpolas
    });

    return formMedicamento;
  }

  formMedicacaoTable(result: any) {
    this.dataSource = []; // Array vazio para armazenar os dados processados.
  
    for (let index = 0; index < result.length; index++) {
      const indicacoesArray = result[index].indicacao.split("\\*");
      const contraIndicacoesArray = result[index].contraIndicacao.split("\\*");
      const quantidadeMlArray = result[index].quantidadeMg.split("\\*");
      const quantidadeMgArray = result[index].quantidadeMl.split("\\*");
  
      const dadosMedicamentos = []; // Array vazio para armazenar os objetos de medicamentos processados.
  
      // Criar objetos de medicamento e adicionar ao array dadosMedicamentos.
      for (let i = 0; i < quantidadeMlArray.length && i < quantidadeMgArray.length; i++) {
        dadosMedicamentos.push({
          quantidadeMg: parseFloat(quantidadeMgArray[i]),
          quantidadeMl: parseFloat(quantidadeMlArray[i])
        });
      }
  
      // Criar o novo objeto de medicamento com os dados processados.
      const medicamento = {
        id: result[index].id,
        nome: result[index].nome,
        medicamentoUso: result[index].medicamentoUso,
        tipo: result[index].tipo,
        dosagemTipo: result[index].dosagemTipo,
        modoDeUso: result[index].modoDeUso,
        dosagem: dadosMedicamentos,
        quantidadeMgKg: result[index].quantidadeMgKg,
        quantidadeSoro: result[index].quantidadeSoro,
        indicacao: indicacoesArray,
        contraIndicacao: contraIndicacoesArray,
        numeroDoses: result[index].numeroDoses,
        quantidadeAmpolas: result[index].quantidadeAmpolas
      };
  
      // Adicionar o objeto de medicamento processado ao array dados.
      this.dataSource.push(medicamento);
    }  
    console.log(this.dataSource);
  }



  
}








