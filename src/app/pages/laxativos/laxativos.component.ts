import { Component } from '@angular/core';
import { Medicamento } from 'src/app/model/medicamento';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-laxativos',
  templateUrl: './laxativos.component.html',
  styleUrls: ['./laxativos.component.scss']
})
export class LaxativosComponent {
  backgroundColor: any = '#dc3545'

  laxativos :any = "Laxativos";

  medicacoes: Medicamento[] = [];

  constructor(private medicamentosService: MedicamentosService)
  {}

  ngOnInit(): void {
    this.medicamentosService.GetAll().subscribe((response: any) => {

      this.medicacoes = response.filter(function(medicacao : any) { return medicacao.tipo == "Laxativo"; });

    });
  }
}
