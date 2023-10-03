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










