import { filter } from 'rxjs';
import { Component } from '@angular/core';
import { Medicamento } from 'src/app/model/medicamento';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-antibioticos',
  templateUrl: './antibioticos.component.html',
  styleUrls: ['./antibioticos.component.scss']
})
export class AntibioticosComponent {
backgroundColor: any = '#007bff'

antibiotico:any = "Antibiótico";

medicacoes: any;

  constructor(private medicamentosService: MedicamentosService)
  {}

  ngOnInit(): void {
    const tipoAtendimento = localStorage.getItem("tipoAtendimento")

    this.medicamentosService.GetAll().subscribe((response: any) => {
      if(tipoAtendimento === "Adulto"){
        this.medicacoes = response.filter(function(medicacao : any) { return medicacao.medicamentoUso == "Adulto" && medicacao.tipo == "Antibiótico"});
      }
      if(tipoAtendimento === "Pediatrico"){
        debugger
        this.medicacoes = response.filter(function(medicacao : any) { return medicacao.medicamentoUso == "Pediátrico" && medicacao.tipo == "Antibiótico"});
      }
    });
  }
}
