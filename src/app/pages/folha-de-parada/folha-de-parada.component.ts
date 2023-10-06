import { StickyDirection } from '@angular/cdk/table';
import { Component } from '@angular/core';
import { MEDICAMENTOS, PREPARACOES, bolsasValvaRessuscitacao, canulasOroFaringea, canulasTraqueal, catetersEV, comprimentosCanulaTraqueal, drenosToracico, fioGuias, intrasOssea, laminasLaringoscopio, manguitosPA, mascarasLaringea, mascarasO2, pasDesfibrilacoes, sondasAspiracao, sondasNasogastrica, sondasUrinaria } from 'src/app/data/dadosFolhaParada';

@Component({
  selector: 'app-folha-de-parada',
  templateUrl: './folha-de-parada.component.html',
  styleUrls: ['./folha-de-parada.component.scss']
})
export class FolhaDeParadaComponent {

peso!:number;
pesoPrevisto!:number
dosagens:any = {};
idade!: number;
bolsaValvaRessuscitacao!: any;
mascaraO2!: any;
canulaOroFaringea!: any;
laminaLaringoscopio!: any;
canulaTraqueal!: any;
comprimentoCanulaTraqueal!: any;
fioGuia!: any;
sondaAspiracao!: any;
manguitoPA!: any;
cateterEV!: any;
intraOssea!: any;
sondaNasogastrica!: any;
sondaUrinaria!: any;
pasDesfibrilacoe!:any;
drenoToracico!: any;
mascaraLaringea!: any;  
tamanhoTE!:any;
profundidadeTE!:any;
desfibrilacao: number[] = [];
cardioversaoSinc: number[] = [];
resultadoCalculo: string = '';
calcLaminasLaringoscopio: string = '';

ml_ADRENALINE_ET: any;
ml_ADRENALINE_IM: any;
ml_ADRENALINE_IV_IO: any;
ml_AMIODARONE: any;
ml_ATP: any;
ml_ATROPINE: any;
ml_CALCIUM_GLUCONATE: any;
ml_DEXTROSE_D10: any;
ml_DEXTROSE_D50: any;
ml_ETOMIDATE: any;
ml_FENTANYL: any;
ml_FLUMAZENIL: any;
ml_KETAMINE: any;
ml_LIGNOCAINE: any;
ml_LORAZEPAM: any;
ml_MgSO4_50: any;
ml_MIDAZOLAM: any;
ml_MORPHINE: any;
ml_NAHCO3: any;
ml_NALOXONE: any;
ml_NEOSTIGMINE: any;
ml_PROCANAMIDE: any;
ml_PROPOFOL: any;
ml_ROCURONIUM: any;
ml_SUGAMMADEX: any;
ml_SUXAMETHONIUM: any;

calcularDosagens() {
  this.calcularLaminasLaringoscopio()
  this.calcularValorComBaseNoPeso()
  this.calcularEquipamentosEmergencia()
  this.calculoMl();
  this.calculoMg();
  this.calcularProfundidadeTE();
  this.calcularTamanhoTE();
  this.calcularDesfibrilacao();
  this.cardioversaoSincronizada();
} 

  calcularIdade(){   
    if(!this.peso && this.idade){
      this.pesoPrevisto = (this.idade * 2) + 8;
      this.calcularTamanhoTE();
      this.calcularProfundidadeTE();
      return
    }

    this.calcularLaminasLaringoscopio()
    this.calcularValorComBaseNoPeso()
    this.calcularEquipamentosEmergencia()
    this.calculoMl();
    this.calculoMg();
    this.calcularTamanhoTE();
    this.calcularProfundidadeTE();    
    this.calcularDesfibrilacao();
    this.cardioversaoSincronizada();
  } 

  calcularEquipamentosEmergencia(){
    this.bolsaValvaRessuscitacao = this.calcularEquipamento(bolsasValvaRessuscitacao);
    this.mascaraO2 = this.calcularEquipamento(mascarasO2);
    this.canulaOroFaringea = this.calcularEquipamento(canulasOroFaringea);
    this.laminaLaringoscopio = this.calcularEquipamento(laminasLaringoscopio);
    this.canulaTraqueal = this.calcularEquipamento(canulasTraqueal);
    this.comprimentoCanulaTraqueal = this.calcularEquipamento(comprimentosCanulaTraqueal);
    this.fioGuia = this.calcularEquipamento(fioGuias);
    this.sondaAspiracao = this.calcularEquipamento(sondasAspiracao);
    this.manguitoPA = this.calcularEquipamento(manguitosPA);
    this.cateterEV = this.calcularEquipamento(catetersEV);
    this.intraOssea = this.calcularEquipamento(intrasOssea);
    this.sondaNasogastrica = this.calcularEquipamento(sondasNasogastrica);
    this.sondaUrinaria = this.calcularEquipamento(sondasUrinaria);
    this.pasDesfibrilacoe = this.calcularEquipamento(pasDesfibrilacoes);
    this.drenoToracico = this.calcularEquipamento(drenosToracico);
    this.mascaraLaringea = this.calcularEquipamento(mascarasLaringea);
  }

  calcularValorComBaseNoPeso(): string {    

    if (this.peso >= 3 && this.peso <= 5) {
      return  this.resultadoCalculo = '1';
    } else if (this.peso >= 6 && this.peso <= 7) {
      return this.resultadoCalculo ='1-1.5';
    } else if ((this.peso >= 8 && this.peso <= 9) || (this.peso >= 10 && this.peso <= 11)) {
      return this.resultadoCalculo = '1.5';
    } else if (this.peso >= 12 && this.peso <= 14) {
      return this.resultadoCalculo = '2';
    } else if (this.peso >= 15 && this.peso <= 18) {
      return this.resultadoCalculo = '2';
    } else if (this.peso >= 19 && this.peso <= 23) {
      return this.resultadoCalculo = '2-2.5';
    } else if (this.peso >= 24 && this.peso <= 29) {
      return this.resultadoCalculo = '2.5';
    } else if (this.peso >= 30 && this.peso <= 36) {
      return this.resultadoCalculo = '3';
    } else {
      return 'Valor não encontrado'; 
    }
  }

  calcularLaminasLaringoscopio(): string {   

    if (this.peso >= 3 && this.peso <= 5) {
      return this.calcLaminasLaringoscopio = "Reta 0-1";
    } else if (this.peso >= 6 && this.peso <= 7) {
      return this.calcLaminasLaringoscopio = "Reta 1";
    } else if ((this.peso >= 8 && this.peso <= 9) || (this.peso >= 10 && this.peso <= 11)) {
      return this.calcLaminasLaringoscopio =  "Reta 1";
    } else if (this.peso >= 12 && this.peso <= 14) {
      return this.calcLaminasLaringoscopio = "Reta 1";
    } else if (this.peso >= 15 && this.peso <= 18) {
      return this.calcLaminasLaringoscopio =  "Reta 2";
    } else if (this.peso >= 19 && this.peso <= 23) {
      return this.calcLaminasLaringoscopio =  "Reta 2";
    } else if (this.peso >= 24 && this.peso <= 29) {
      return this.calcLaminasLaringoscopio =  "Reta 2 ou curva";
    } else if (this.peso >= 30 && this.peso <= 36) {
      return this.calcLaminasLaringoscopio = "Reta 2-3 ou curva";
    } else {
      return "Valor não encontrado";
    }
  }
  

  calcularEquipamento(equipamento:any) {
    const faixa = this.encontrarFaixaDePeso(); 
    const objetoEncontrado = equipamento.find((item: any )=> item.value === faixa);
    return objetoEncontrado?.label;
  }


  calcularTamanhoTE() {    
    console.log("Valor de this.idade:", this.idade);

    if (this.idade > 1) {
      // Calcular o tamanho bruto do tubo com base na idade
      const tamanhoETTRaw = (this.idade / 4) + 3.5;
      // Arredondar o tamanho bruto para o próximo número inteiro ou 0,5
      this.tamanhoTE = Math.ceil(tamanhoETTRaw * 2) / 2;
      // Limitar tamanho do TE a 9, se for maior que 9
      this.tamanhoTE = Math.min(this.tamanhoTE, 9);
      
      return 
    }

    this.tamanhoTE = '--'
    return 

  }

  calcularProfundidadeTE() {
   
    if( this.idade > 1 ) {       
      this.profundidadeTE = this.tamanhoTE * 3;
      return 
    }

    this.profundidadeTE = '--'
    return 
    
  }

  calcularDesfibrilacao() {
    const energias = [2, 4, 6, 8, 10];      
    // Calcular as cinco energias e adicioná-las ao array

    this.desfibrilacao = energias.map(x => x * this.peso);
  }

  cardioversaoSincronizada() {
    const energias = [0.5,1,2];    
    // Calcular as cinco energias e adicioná-las ao array    
    
    this.cardioversaoSinc = energias.map(x => x * this.peso);
  }
 

  calculoMl(){ 
      this.ml_ADRENALINE_IV_IO = ((this.peso * MEDICAMENTOS.ADRENALINE_IV_IO * 1) / PREPARACOES.ADRENALINE_IV_IO).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_ADRENALINE_ET = ((this.peso * MEDICAMENTOS.ADRENALINE_ET * 1) / PREPARACOES.ADRENALINE_ET).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_ADRENALINE_IM = ((this.peso * MEDICAMENTOS.ADRENALINE_IM * 1) / PREPARACOES.ADRENALINE_IM).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_ATROPINE = ((this.peso * MEDICAMENTOS.ATROPINE * 1) / PREPARACOES.ATROPINE).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_AMIODARONE = ((this.peso * MEDICAMENTOS.AMIODARONE * 1) / PREPARACOES.AMIODARONE).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_ATP = ((this.peso * MEDICAMENTOS.ATP * 1) / PREPARACOES.ATP).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_CALCIUM_GLUCONATE = ((this.peso * MEDICAMENTOS.CALCIUM_GLUCONATE * 1) / PREPARACOES.CALCIUM_GLUCONATE).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_DEXTROSE_D10 = ((this.peso * MEDICAMENTOS.DEXTROSE_D10 * 1) / PREPARACOES.DEXTROSE_D10).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_DEXTROSE_D50 = ((this.peso * MEDICAMENTOS.DEXTROSE_D50 * 1) / PREPARACOES.DEXTROSE_D50).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_FLUMAZENIL = ((this.peso * MEDICAMENTOS.FLUMAZENIL * 1) / PREPARACOES.FLUMAZENIL).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_LIGNOCAINE = ((this.peso * MEDICAMENTOS.LIGNOCAINE * 1) / PREPARACOES.LIGNOCAINE).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_LORAZEPAM = ((this.peso * MEDICAMENTOS.LORAZEPAM * 1) / PREPARACOES.LORAZEPAM).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_MIDAZOLAM = ((this.peso * MEDICAMENTOS.MIDAZOLAM * 1) / PREPARACOES.MIDAZOLAM).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_MgSO4_50 = ((this.peso * MEDICAMENTOS.MgSO4_50 * 5) / PREPARACOES.MgSO4_50).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_NALOXONE = ((this.peso * MEDICAMENTOS.NALOXONE * 1) / PREPARACOES.NALOXONE).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_NAHCO3 = ((this.peso * MEDICAMENTOS.NAHCO3 * 1) / PREPARACOES.NAHCO3).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_PROCANAMIDE = ((this.peso * MEDICAMENTOS.PROCANAMIDE * 1) / PREPARACOES.PROCANAMIDE).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_KETAMINE = ((this.peso * MEDICAMENTOS.KETAMINE * 1) / PREPARACOES.KETAMINE).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_FENTANYL = ((this.peso * MEDICAMENTOS.FENTANYL * 1) / PREPARACOES.FENTANYL).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_MORPHINE = ((this.peso * MEDICAMENTOS.MORPHINE * 1) / PREPARACOES.MORPHINE).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_ETOMIDATE = ((this.peso * MEDICAMENTOS.ETOMIDATE * 1) / PREPARACOES.ETOMIDATE).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_PROPOFOL = ((this.peso * MEDICAMENTOS.PROPOFOL * 1) / PREPARACOES.PROPOFOL).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_ROCURONIUM = ((this.peso * MEDICAMENTOS.ROCURONIUM * 1) / PREPARACOES.ROCURONIUM).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_SUXAMETHONIUM = ((this.peso * MEDICAMENTOS.SUXAMETHONIUM * 1) / PREPARACOES.SUXAMETHONIUM).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_NEOSTIGMINE = ((this.peso * MEDICAMENTOS.NEOSTIGMINE * 1) / PREPARACOES.NEOSTIGMINE).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      this.ml_SUGAMMADEX = ((this.peso * MEDICAMENTOS.SUGAMMADEX * 1) / PREPARACOES.SUGAMMADEX).toLocaleString('pt-BR', { minimumFractionDigits: 2 });  

    }
     


  calculoMg(){

    this.dosagens.ADRENALINE_IV_IO = this.peso * MEDICAMENTOS.ADRENALINE_IV_IO;
    this.dosagens.ADRENALINE_ET = this.peso * MEDICAMENTOS.ADRENALINE_ET;
    this.dosagens.ADRENALINE_IM = this.peso * MEDICAMENTOS.ADRENALINE_IM;
    this.dosagens.ATROPINE = this.peso * MEDICAMENTOS.ATROPINE;
    this.dosagens.AMIODARONE = this.peso * MEDICAMENTOS.AMIODARONE;
    this.dosagens.ATP = this.peso * MEDICAMENTOS.ATP;
    this.dosagens.CALCIUM_GLUCONATE = this.peso * MEDICAMENTOS.CALCIUM_GLUCONATE;
    this.dosagens.DEXTROSE_D10 = this.peso * MEDICAMENTOS.DEXTROSE_D10;
    this.dosagens.DEXTROSE_D50 = this.peso * MEDICAMENTOS.DEXTROSE_D50;
    this.dosagens.FLUMAZENIL = this.peso * MEDICAMENTOS.FLUMAZENIL;
    this.dosagens.LIGNOCAINE = this.peso * MEDICAMENTOS.LIGNOCAINE;
    this.dosagens.LORAZEPAM = this.peso * MEDICAMENTOS.LORAZEPAM;
    this.dosagens.MAGNESIUM_SULFATE = this.peso * MEDICAMENTOS.MAGNESIUM_SULFATE;
    this.dosagens.MgSO4_50 = this.peso * MEDICAMENTOS.MgSO4_50;
    this.dosagens.NALOXONE = this.peso * MEDICAMENTOS.NALOXONE;
    this.dosagens.NAHCO3 = this.peso * MEDICAMENTOS.NAHCO3;
    this.dosagens.PROCANAMIDE = this.peso * MEDICAMENTOS.PROCANAMIDE;
    this.dosagens.KETAMINE = this.peso * MEDICAMENTOS.KETAMINE;
    this.dosagens.MIDAZOLAM = this.peso * MEDICAMENTOS.MIDAZOLAM;
    this.dosagens.FENTANYL = this.peso * MEDICAMENTOS.FENTANYL;
    this.dosagens.MORPHINE = this.peso * MEDICAMENTOS.MORPHINE;
    this.dosagens.ETOMIDATE = this.peso * MEDICAMENTOS.ETOMIDATE;
    this.dosagens.PROPOFOL = this.peso * MEDICAMENTOS.PROPOFOL;
    this.dosagens.ROCURONIUM = this.peso * MEDICAMENTOS.ROCURONIUM;
    this.dosagens.SUXAMETHONIUM = this.peso * MEDICAMENTOS.SUXAMETHONIUM;
    this.dosagens.NEOSTIGMINE = this.peso * MEDICAMENTOS.NEOSTIGMINE;
    this.dosagens.SUGAMMADEX = this.peso * MEDICAMENTOS.SUGAMMADEX;
  
    for (const medicamento in this.dosagens) {
      if (this.dosagens.hasOwnProperty(medicamento)) {
        this.dosagens[medicamento] = parseFloat(this.dosagens[medicamento].toFixed(2));
      }
    } 
  }

    private encontrarFaixaDePeso() {      
      
      if (this.peso >= 3 && this.peso <= 5) return 1;
      if (this.peso >= 6 && this.peso <= 7) return 2;
      if (this.peso >= 8 && this.peso <= 9) return 3;
      if (this.peso >= 10 && this.peso <= 11) return 4;
      if (this.peso >= 12 && this.peso <= 14) return 5;
      if (this.peso >= 15 && this.peso <= 18) return 6;
      if (this.peso >= 19 && this.peso <= 23) return 7;
      if (this.peso >= 24 && this.peso <= 29) return 8;
      if (this.peso >= 30) return 9;

      return 0;  

    }

    back(){
       history.back()
    } 
  }
  


