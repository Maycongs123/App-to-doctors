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
}
