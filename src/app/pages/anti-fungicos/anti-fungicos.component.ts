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
    this.medicamentosService.GetAll().subscribe((response: any) => {

      this.medicacoes = response.filter(function(medicacao : any) { return medicacao.tipo == "Anti-Fúngico"; });

    });
  }
}
