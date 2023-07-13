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
    this.medicamentosService.GetAll().subscribe((response: any) => {

      this.medicacoes = response.filter(function(medicacao : any) { return medicacao.tipo == "Anti-Parasitário"; });

    });
  }
}
