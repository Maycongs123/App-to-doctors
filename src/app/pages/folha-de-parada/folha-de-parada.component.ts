import { StickyDirection } from '@angular/cdk/table';
import { Component } from '@angular/core';

@Component({
  selector: 'app-folha-de-parada',
  templateUrl: './folha-de-parada.component.html',
  styleUrls: ['./folha-de-parada.component.scss']
})
export class FolhaDeParadaComponent {

peso!:number;
dosagens:any = {};
idade!: number;

calcularDosagens() {

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

  bolsasValvaRessuscitacao = [
    {value: 1, label: "Lactente"},
    {value: 2, label: "Lactente/criança"},
    {value: 3, label: "Lactente/criança"},
    {value: 4, label: "Criança"},
    {value: 5, label: "Criança"},
    {value: 6, label: "Criança"},
    {value: 7, label: "Criança"},
    {value: 8, label: "Criança/adulto"},
    {value: 9, label: "Adulto"}
  ];

  mascarasO2 = [
    {value: 1, label: "Neonatal"},
    {value: 2, label: "Neonatal"},
    {value: 3, label: "Neonatal"},
    {value: 4, label: "Pediátrica"},
    {value: 5, label: "Pediátrica"},
    {value: 6, label: "Pediátrica"},
    {value: 7, label: "Pediátrica"},
    {value: 8, label: "Adulto"},
    {value: 9, label: "Adulto"}
  ];


  canulasOroFaringea = [
    {value: 1, label: "0"},
    {value: 2, label: "0-1"},
    {value: 3, label: "1"},
    {value: 4, label: "1"},
    {value: 5, label: "1-2"},
    {value: 6, label: "2"},
    {value: 7, label: "2"},
    {value: 8, label: "2-3"},
    {value: 9, label: "3 ou +"}
  ];

  laminasLaringoscopio = [
    {value: 1, label: "Reta 0-1"},
    {value: 2, label: "Reta 1"},
    {value: 3, label: "Reta 1"},
    {value: 4, label: "Reta 1"},
    {value: 5, label: "Reta 2"},
    {value: 6, label: "Reta 2"},
    {value: 7, label: "Reta 2 ou curva"},
    {value: 8, label: "Reta 2-3 ou curva"},
    {value: 9, label: "Reta 3 ou curva"}
  ];

  canulasTraqueal = [
    {value: 1, label: "Prematuro 2,5 Termo 3,0 - 3,5 sem cuff"},
    {value: 2, label: "3,5 sem cuff - 3,0 com cuff"},
    {value: 3, label: "3,5 sem cuff - 3,0 com cuff"},
    {value: 4, label: "4,0 sem cuff - 3,5 com cuff"},
    {value: 5, label: "4,5 sem cuff - 4,0 com cuff"},
    {value: 6, label: "5,0 sem cuff - 4,5 com cuff"},
    {value: 7, label: "5,5 sem cuff - 5,0 com cuff"},
    {value: 8, label: "6,0 com cuff"},
    {value: 9, label: "6,5 com cuff"}
  ];

  comprimentosCanulaTraqueal = [
    {value: 1, label: "3kg: 9-9,5 / 4kg: 9,5-10 / 5kg: 10-10,5"},
    {value: 2, label: "10,5 - 11"},
    {value: 3, label: "10,5 - 11"},
    {value: 4, label: "11 - 12"},
    {value: 5, label: "12,5 - 13,5"},
    {value: 6, label: "14 - 15"},
    {value: 7, label: "15,5 - 16,5"},
    {value: 8, label: "17 - 18"},
    {value: 9, label: "18,5 - 19,5"}
  ];

  fioGuias = [
    {value: 1, label: "6"},
    {value: 2, label: "6"},
    {value: 3, label: "6"},
    {value: 4, label: "6"},
    {value: 5, label: "6"},
    {value: 6, label: "6"},
    {value: 7, label: "14"},
    {value: 8, label: "14"},
    {value: 9, label: "14"}
  ];

  sondasAspiracao = [
    {value: 1, label: "6 - 8"},
    {value: 2, label: "6 - 8"},
    {value: 3, label: "8"},
    {value: 4, label: "8 - 10"},
    {value: 5, label: "10"},
    {value: 6, label: "10"},
    {value: 7, label: "10"},
    {value: 8, label: "10"},
    {value: 9, label: "12"}
  ];

  manguitosPA = [
    {value: 1, label: "Neonato/lactente"},
    {value: 2, label: "Neonato/lactente"},
    {value: 3, label: "Neonato/lactente"},
    {value: 4, label: "Lactente/criança"},
    {value: 5, label: "Criança"},
    {value: 6, label: "Criança"},
    {value: 7, label: "Criança"},
    {value: 8, label: "Criança"},
    {value: 9, label: "Pequeno adulto"}
  ];

  catetersEV = [
    {value: 1, label: "22 - 24"},
    {value: 2, label: "22 - 24"},
    {value: 3, label: "22 - 24"},
    {value: 4, label: "20 - 24"},
    {value: 5, label: "18 - 22"},
    {value: 6, label: "18 - 22"},
    {value: 7, label: "18 - 20"},
    {value: 8, label: "18 - 20"},
    {value: 9, label: "16 - 20"}
  ];

  intrasOssea = [
    {value: 1, label: "18/15"},
    {value: 2, label: "18/15"},
    {value: 3, label: "18/15"},
    {value: 4, label: "15"},
    {value: 5, label: "15"},
    {value: 6, label: "15"},
    {value: 7, label: "15"},
    {value: 8, label: "15"},
    {value: 9, label: "15"}
  ];

  sondasNasogastrica = [
    {value: 1, label: "5 - 8"},
    {value: 2, label: "5 - 8"},
    {value: 3, label: "5 - 8"},
    {value: 4, label: "8 - 10"},
    {value: 5, label: "10"},
    {value: 6, label: "10"},
    {value: 7, label: "12 - 14"},
    {value: 8, label: "14 - 18"},
    {value: 9, label: "16 - 18"}
  ];

  sondasUrinaria = [
    {value: 1, label: "5"},
    {value: 2, label: "5 - 8"},
    {value: 3, label: "5 - 8"},
    {value: 4, label: "8 - 10"},
    {value: 5, label: "10"},
    {value: 6, label: "10"},
    {value: 7, label: "12 - 14"},
    {value: 8, label: "14 - 18"},
    {value: 9, label: "16 - 18"}
  ];

  pasDesfibrilacoes = [
    {value: 1, label: "Pás de lactente <1 ano"},
    {value: 2, label: "Pás de lactente <1 ano"},
    {value: 3, label: "Pás de lactente <1 ano ou 10kg"},
    {value: 4, label: "Pás de lactente >= 1 ano ou >= 10kg"},
    {value: 5, label: "Pás de adulto"},
    {value: 6, label: "Pás de adulto"},
    {value: 7, label: "Pás de adulto"},
    {value: 8, label: "Pás de adulto"},
    {value: 9, label: "Pás de adulto"}
  ];

  drenosToracico = [
    {value: 1, label: "10"},
    {value: 2, label: "10 - 12"},
    {value: 3, label: "10 - 12"},
    {value: 4, label: "16 - 20"},
    {value: 5, label: "20 - 24"},
    {value: 6, label: "20 - 24"},
    {value: 7, label: "24 - 32"},
    {value: 8, label: "28 - 32"},
    {value: 9, label: "32 - 38"}
  ];

  mascarasLaringea = [
    {value: 1, label: "1"},
    {value: 2, label: "1 - 1,5"},
    {value: 3, label: "1,5"},
    {value: 4, label: "1,5"},
    {value: 5, label: "2"},
    {value: 6, label: "2"},
    {value: 7, label: "2 - 2,5"},
    {value: 8, label: "2,5"},
    {value: 9, label: "3"}
  ];  

  calcularSoma(){    
    this.calcularTeste()
  }


  calcularTeste(){
    debugger
    
    this.calcularBolsaValvaRessuscitacao();
    this.calcularMascaraO2()
    this.calcularCanulaOroFaringea()
    this.calcularLaminaLaringoscopio()
    this.calcularCanulaTraqueal()
    this.calcularComprimentoCanulaTraqueal()
    this.calcularFioGuia()
    this.calcularSondaAspiracao()
    this.calcularManguitoPA()
    this.calcularCateterEV()
    this.calcularIntraOssea()
    this.calcularSondaNasogastrica()
    this.calcularSondaUrinaria()
    this.calcularPasDesfibrilacoes()
    this.calcularDrenosToracico()
    this.calcularMascaraLaringea()

  }  

  calcularBolsaValvaRessuscitacao() {
    const faixa = this.encontrarFaixaDePeso();
    const objetoEncontrado = this.bolsasValvaRessuscitacao.find(item => item.value === faixa);
    this.bolsaValvaRessuscitacao = objetoEncontrado?.label
  }

  calcularMascaraO2() {
    const faixa = this.encontrarFaixaDePeso();    
    const objetoEncontrado = this.mascarasO2.find(item => item.value === faixa);
    this.mascaraO2 = objetoEncontrado?.label  
  }

  calcularCanulaOroFaringea() {
    const faixa = this.encontrarFaixaDePeso();
    const objetoEncontrado = this.canulasOroFaringea.find(item => item.value === faixa);
    this.canulaOroFaringea = objetoEncontrado?.label
  }

  calcularLaminaLaringoscopio() {
    const faixa = this.encontrarFaixaDePeso();
    const objetoEncontrado = this.laminasLaringoscopio.find(item => item.value === faixa);
    this.laminaLaringoscopio = objetoEncontrado?.label
  }
 
  calcularCanulaTraqueal() {
    const faixa = this.encontrarFaixaDePeso();
    const objetoEncontrado = this.canulasTraqueal.find(item => item.value === faixa);
    this.canulaTraqueal = objetoEncontrado?.label
  }
  
  calcularComprimentoCanulaTraqueal() {
    const faixa = this.encontrarFaixaDePeso();
    const objetoEncontrado = this.comprimentosCanulaTraqueal.find(item => item.value === faixa);
    this.comprimentoCanulaTraqueal = objetoEncontrado?.label
  }
  
  calcularFioGuia() {
    const faixa = this.encontrarFaixaDePeso();
    const objetoEncontrado = this.fioGuias.find(item => item.value === faixa);
    this.fioGuia = objetoEncontrado?.label
  }
  
  calcularSondaAspiracao() {
    const faixa = this.encontrarFaixaDePeso();
    const objetoEncontrado = this.sondasAspiracao.find(item => item.value === faixa);
    this.sondaAspiracao = objetoEncontrado?.label
  }
  
  calcularManguitoPA() {
    const faixa = this.encontrarFaixaDePeso();
    const objetoEncontrado = this.manguitosPA.find(item => item.value === faixa);
    this.manguitoPA = objetoEncontrado?.label
  }
 
  calcularCateterEV() {
    const faixa = this.encontrarFaixaDePeso();
    const objetoEncontrado = this.catetersEV.find(item => item.value === faixa);
    this.cateterEV = objetoEncontrado?.label
  }
  
  calcularIntraOssea() {
    const faixa = this.encontrarFaixaDePeso();
    const objetoEncontrado = this.intrasOssea.find(item => item.value === faixa);
    this.intraOssea = objetoEncontrado?.label
  }

  calcularSondaNasogastrica() {
    const faixa = this.encontrarFaixaDePeso();
    const objetoEncontrado = this.sondasNasogastrica.find(item => item.value === faixa);
    this.sondaNasogastrica = objetoEncontrado?.label
  }

  calcularSondaUrinaria() {
    const faixa = this.encontrarFaixaDePeso();
    const objetoEncontrado = this.sondasUrinaria.find(item => item.value === faixa);
    this.sondaUrinaria = objetoEncontrado?.label
  }

  calcularPasDesfibrilacoes() {
    const faixa = this.encontrarFaixaDePeso();
    const objetoEncontrado = this.pasDesfibrilacoes.find(item => item.value === faixa);
    this.pasDesfibrilacoe = objetoEncontrado?.label
  }
  
  calcularDrenosToracico() {
    const faixa = this.encontrarFaixaDePeso();
    const objetoEncontrado  = this.drenosToracico.find(item => item.value === faixa);
    this.drenoToracico = objetoEncontrado?.label
  }

  calcularMascaraLaringea() {
    const faixa = this.encontrarFaixaDePeso();
    const objetoEncontrado = this.mascarasLaringea.find(item => item.value === faixa);
    this.mascaraLaringea = objetoEncontrado?.label
  }


  private encontrarFaixaDePeso() {
    debugger
    if (this.peso >= 3 && this.peso <= 5) return 1;
    if (this.peso >= 6 && this.peso <= 7) return 2;
    if (this.peso >= 8 && this.peso <= 9) return 3;
    if (this.peso >= 10 && this.peso <= 11) return 4;
    if (this.peso >= 12 && this.peso <= 14) return 5;
    if (this.peso >= 15 && this.peso <= 18) return 6;
    if (this.peso >= 19 && this.peso <= 23) return 7;
    if (this.peso >= 24 && this.peso <= 29) return 8;
    if (this.peso >= 30 && this.peso <= 36) return 9;

    return 0;  

  }
}


}

export const MEDICAMENTOS = {
  ADRENALINE_IV_IO: 0.01,
  ADRENALINE_ET: 0.1,
  ADRENALINE_IM: 0.01,
  ATROPINE: 0.02,
  AMIODARONE: 5,
  ATP: 0.167,
  CALCIUM_GLUCONATE: 0.5,
  DEXTROSE_D10: 2.5,
  DEXTROSE_D50: 0.5,
  FLUMAZENIL: 0.01,
  LIGNOCAINE: 1,
  LORAZEPAM: 0.1,
  MAGNESIUM_SULFATE: 40,
  NALOXONE: 0.1,
  NAHCO3: 1,
  PROCANAMIDE: 15, // Verifique se a dosagem está correta
  KETAMINE: 1, // Corrija este valor para a dosagem correta (ex: 1 mg/kg)
  MIDAZOLAM: 0.1,
  FENTANYL: 1, // Corrija este valor para a dosagem correta (ex: 1 microgram/kg)
  MORPHINE: 0.1, // Corrija este valor para a dosagem correta (ex: 0.1 mg/kg)
  ETOMIDATE: 0.3, // Corrija este valor para a dosagem correta (ex: 0.3 mg/kg)
  PROPOFOL: 1, // Corrija este valor para a dosagem correta (ex: 1 mg/kg)
  ROCURONIUM: 1, // Corrija este valor para a dosagem correta (ex: 1 mg/kg)
  SUXAMETHONIUM: 1.5, // Corrija este valor para a dosagem correta (ex: 1.5 mg/kg)
  NEOSTIGMINE: 0.05,
  SUGAMMADEX: 16,
  MgSO4_50:40, // Verifique se a dosagem está correta
};










