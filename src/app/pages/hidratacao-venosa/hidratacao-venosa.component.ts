import { Component } from '@angular/core';
import { Medicamento } from 'src/app/model/medicamento';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-hidratacao-venosa',
  templateUrl: './hidratacao-venosa.component.html',
  styleUrls: ['./hidratacao-venosa.component.scss']
})
export class HidratacaoVenosaComponent {
  backgroundColor: any = '#ffc107'

  hidratacaoVenosa :any = "Hidratação Venosa";

  medicacoes: Medicamento[] = [];

  constructor(private medicamentosService: MedicamentosService)
  {}

  ngOnInit(): void {
    const tipoAtendimento = localStorage.getItem("tipoAtendimento")

    this.medicamentosService.GetAll().subscribe((response: any) => {
      if(tipoAtendimento === "Adulto"){
        this.medicacoes = response.filter(function(medicacao : any) { return medicacao.medicamentoUso == "Adulto" && medicacao.tipo == "Hidratação Venosa"});
      }
      if(tipoAtendimento === "Pediatrico"){
        this.medicacoes = response.filter(function(medicacao : any) { return medicacao.medicamentoUso == "Pediátrico" && medicacao.tipo == "Hidratação Venosa"});
      }
    });
  }


  peso: any;
  etapas: any;
  valueSG5: any;
  valueNaCl20: any;
  valueNaCl20Tonico: any;
  valueKCl10: any;
  etapaSG5: any;
  etapaNaCl20: any;
  etapaNaCl20Tonico: any;
  etapaKCl10: any;
  taxaInfusaoBombaVenosa: any;
  taxaInfusaoGotasMinVenosa: any;
  taxaInfusaoMicrogotasMinVenosa:any;
  taxaInfusaoBombaIsotonica: any;
  taxaInfusaoGotasMinIsotonica: any;
  taxaInfusaoMicrogotasMinIsotonica:any;
  
  back(){
    history.back()
  }

  calcularHidratacaoVenosa(){
    if(this.peso <= 10){
      this.valueSG5 = 100;
      this.valueNaCl20 = 3;
      this.valueKCl10 = 2;
      this.valueNaCl20Tonico = this.valueSG5 * 0.0411;
    }
    if(this.peso > 10 && this.peso <= 20){
      this.valueSG5 = 1050;
      this.valueNaCl20 = 32;
      this.valueKCl10 = 21;
      this.valueNaCl20Tonico = this.valueSG5 * 0.0411;
    }
    if(this.peso > 20){
      this.valueSG5 = (1500 + (20 * (this.peso - 20)));
      this.valueNaCl20 = (50 + (1 * (this.peso - 20))) / 3.4;
      this.valueKCl10 = (30 + (0.5 * (this.peso - 20))) / 1.3;
      this.valueNaCl20Tonico = this.valueSG5 * 0.0411;
    }

    this.etapaSG5 = (this.valueSG5/this.etapas).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    this.etapaNaCl20 = (this.valueNaCl20/this.etapas).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    this.etapaKCl10 = (this.valueKCl10/this.etapas).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    this.etapaNaCl20Tonico = (this.valueNaCl20Tonico/this.etapas).toLocaleString('pt-BR', { minimumFractionDigits: 2 });

    this.taxaInfusaoBombaVenosa = ((this.valueSG5 + this.valueNaCl20 + this.valueKCl10) / 24).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    this.taxaInfusaoGotasMinVenosa = ((this.valueSG5 + this.valueNaCl20 + this.valueKCl10) / 72).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    this.taxaInfusaoMicrogotasMinVenosa = ((this.valueSG5 + this.valueNaCl20 + this.valueKCl10) / 24).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
   
    this.taxaInfusaoBombaIsotonica = ((this.valueSG5 + this.valueNaCl20Tonico + this.valueKCl10) / 24).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    this.taxaInfusaoGotasMinIsotonica = ((this.valueSG5 + this.valueNaCl20Tonico + this.valueKCl10) / 72).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    this.taxaInfusaoMicrogotasMinIsotonica = ((this.valueSG5 + this.valueNaCl20Tonico + this.valueKCl10) / 24).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  }
}
