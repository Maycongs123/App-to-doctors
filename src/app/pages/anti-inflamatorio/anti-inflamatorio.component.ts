import { Component } from '@angular/core';
import { Medicamento } from 'src/app/model/medicamento';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-anti-inflamatorio',
  templateUrl: './anti-inflamatorio.component.html',
  styleUrls: ['./anti-inflamatorio.component.scss']
})
export class AntiInflamatorioComponent {
  backgroundColor: any = '#dc3545'

  antiInflamatorios:any = "Anti-Inflamatórios";

  medicacoes: Medicamento[] = [];

  constructor(private medicamentosService: MedicamentosService)
  {}

  ngOnInit(): void {
    this.medicamentosService.GetAll().subscribe((response: any) => {

      this.medicacoes = response.filter(function(medicacao : any) { return medicacao.tipo == "Anti-Inflamatório"; });

    });
  }
}
