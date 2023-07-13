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
    this.medicamentosService.GetAll().subscribe((response: any) => {

      this.medicacoes = response.filter(function(medicacao : any) { return medicacao.tipo == "Anti-Histamínico"; });

    });
  }
}
