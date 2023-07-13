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
    this.medicamentosService.GetAll().subscribe((response: any) => {

      this.medicacoes = response.filter(function(medicacao : any) { return medicacao.tipo == "Hidratação Venosa"; });

    });
  }
}
