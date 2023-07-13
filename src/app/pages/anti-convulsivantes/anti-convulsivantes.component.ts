import { MedicamentosService } from 'src/app/services/medicamentos.service';
import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/model/medicamento';

@Component({
  selector: 'app-anti-convulsivantes',
  templateUrl: './anti-convulsivantes.component.html',
  styleUrls: ['./anti-convulsivantes.component.scss']
})
export class AntiConvulsivantesComponent implements OnInit{

  backgroundColor: any = '#6f42c1'

  antiConvulsivantes:any = "Anti-Convulsivantes";

  medicacoes: Medicamento[] = [];

  constructor(private medicamentosService: MedicamentosService)
  {}

  ngOnInit(): void {
    debugger
    this.medicamentosService.GetAll().subscribe((response: any) => {

      this.medicacoes = response.filter(function(medicacao : any) { return medicacao.tipo == "Anti-Convulsivante"; });

    });
  }
}
