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
    this.medicamentosService.GetAll().subscribe((response: any) => {

      this.medicacoes = response.filter(function(medicacao : any) { return medicacao.tipo == "Broncodilatadore"; });

    });
  }
}
