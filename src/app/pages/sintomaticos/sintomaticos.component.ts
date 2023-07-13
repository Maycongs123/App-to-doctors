import { Component } from '@angular/core';
import { Medicamento } from 'src/app/model/medicamento';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-sintomaticos',
  templateUrl: './sintomaticos.component.html',
  styleUrls: ['./sintomaticos.component.scss']
})
export class SintomaticosComponent {
  backgroundColor: any = '#fd7e14'

  sintomaticos :any = "Sintomaticos";


  medicacoes: Medicamento[] = [];

  constructor(private medicamentosService: MedicamentosService)
  {}

  ngOnInit(): void {
    this.medicamentosService.GetAll().subscribe((response: any) => {

      this.medicacoes = response.filter(function(medicacao : any) { return medicacao.tipo == "Sintomático"; });

    });
  }
}
