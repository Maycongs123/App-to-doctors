import { Component } from '@angular/core';
import { Medicamento } from 'src/app/model/medicamento';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-corticosteroides',
  templateUrl: './corticosteroides.component.html',
  styleUrls: ['./corticosteroides.component.scss']
})
export class CorticosteroidesComponent {
  backgroundColor: any = '#007bff'

  corticosteroides :any = "Corticosteroides";

  medicacoes: Medicamento[] = [];

  constructor(private medicamentosService: MedicamentosService)
  {}

  ngOnInit(): void {
    this.medicamentosService.GetAll().subscribe((response: any) => {

      this.medicacoes = response.filter(function(medicacao : any) { return medicacao.tipo == "Corticosteróide"; });

    });
  }
}
