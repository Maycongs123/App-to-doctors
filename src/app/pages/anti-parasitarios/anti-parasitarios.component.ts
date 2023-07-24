import { Component } from '@angular/core';
import { Medicamento } from 'src/app/model/medicamento';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-anti-parasitarios',
  templateUrl: './anti-parasitarios.component.html',
  styleUrls: ['./anti-parasitarios.component.scss']
})
export class AntiParasitariosComponent {
  backgroundColor: any = '#3bb54a'

  antiParasitarios:any = "Anti-Parasitarios";

  medicacoes: Medicamento[] = [];

  constructor(private medicamentosService: MedicamentosService)
  {}

  ngOnInit(): void {
    const tipoAtendimento = localStorage.getItem("tipoAtendimento")

    this.medicamentosService.GetAll().subscribe((response: any) => {
      if(tipoAtendimento === "Adulto"){
        this.medicacoes = response.filter(function(medicacao : any) { return medicacao.medicamentoUso == "Adulto" && medicacao.tipo == "Anti-Parasitário"});
      }
      if(tipoAtendimento === "Pediatrico"){
        this.medicacoes = response.filter(function(medicacao : any) { return medicacao.medicamentoUso == "Pediátrico" && medicacao.tipo == "Anti-Parasitário"});
      }
    });
  }  
}
