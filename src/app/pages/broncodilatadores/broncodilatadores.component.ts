import { Component } from '@angular/core';
import { Medicamento } from 'src/app/model/medicamento';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-broncodilatadores',
  templateUrl: './broncodilatadores.component.html',
  styleUrls: ['./broncodilatadores.component.scss']
})
export class BroncodilatadoresComponent {


  backgroundColor: any = '#6f42c1'

  broncodilatadores :any = "Broncodilatadores";

  medicacoes: Medicamento[] = [];

  constructor(private medicamentosService: MedicamentosService)
  {}

  ngOnInit(): void {
    const tipoAtendimento = localStorage.getItem("tipoAtendimento")

    this.medicamentosService.GetAll().subscribe((response: any) => {
      if(tipoAtendimento === "Adulto"){
        this.medicacoes = response.filter(function(medicacao : any) { return medicacao.medicamentoUso == "Adulto" && medicacao.tipo == "Broncodilatadore"});
      }
      if(tipoAtendimento === "Pediatrico"){
        this.medicacoes = response.filter(function(medicacao : any) { return medicacao.medicamentoUso == "Pediátrico" && medicacao.tipo == "Broncodilatadore"});
      }
    });
  }
}
