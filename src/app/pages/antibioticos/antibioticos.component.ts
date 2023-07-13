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
    this.medicamentosService.GetAll().subscribe((response: any) => {

      this.medicacoes = response.filter(function(medicacao : any) { return medicacao.tipo == "Antibiótico"; });

    });
  }

}
