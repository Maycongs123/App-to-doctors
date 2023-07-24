import { Component } from '@angular/core';
import { Medicamento } from 'src/app/model/medicamento';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-anti-histaminicos',
  templateUrl: './anti-histaminicos.component.html',
  styleUrls: ['./anti-histaminicos.component.scss']
})
export class AntiHistaminicosComponent {
  backgroundColor: any = '#28a745'

  antiHistaminicos:any = "Anti-Histaminicos";

  medicacoes: Medicamento[] = [];

  constructor(private medicamentosService: MedicamentosService)
  {}

  ngOnInit(): void {
    const tipoAtendimento = localStorage.getItem("tipoAtendimento")

    this.medicamentosService.GetAll().subscribe((response: any) => {
      if(tipoAtendimento === "Adulto"){
        this.medicacoes = response.filter(function(medicacao : any) { return medicacao.medicamentoUso == "Adulto" && medicacao.tipo == "Anti-Histamínico"});
      }
      if(tipoAtendimento === "Pediatrico"){
        this.medicacoes = response.filter(function(medicacao : any) { return medicacao.medicamentoUso == "Pediátrico" && medicacao.tipo == "Anti-Histamínico"});
      }
    });
  }
}

