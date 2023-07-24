import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/model/medicamento';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-anti-fungicos',
  templateUrl: './anti-fungicos.component.html',
  styleUrls: ['./anti-fungicos.component.scss']
})
export class AntiFungicosComponent implements OnInit{
  backgroundColor: any = '#ffc107'

  antiFungicos:any = "Anti-Fúngicos";

  medicacoes: Medicamento[] = [];

  constructor(private medicamentosService: MedicamentosService)
  {}

  ngOnInit(): void {
    const tipoAtendimento = localStorage.getItem("tipoAtendimento")

    this.medicamentosService.GetAll().subscribe((response: any) => {
      if(tipoAtendimento === "Adulto"){
        this.medicacoes = response.filter(function(medicacao : any) { return medicacao.medicamentoUso == "Adulto" && medicacao.tipo == "Anti-Fúngico"});
      }
      if(tipoAtendimento === "Pediatrico"){
        this.medicacoes = response.filter(function(medicacao : any) { return medicacao.medicamentoUso == "Pediátrico" && medicacao.tipo == "Anti-Fúngico"});
      }
    });
  }
  }



