import { Component,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaMedicamentosComponent } from 'src/app/components/lista-medicamentos/lista-medicamentos.component';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-anti-inflamatorio-calculos',
  templateUrl: './anti-inflamatorio-calculos.component.html',
  styleUrls: ['./anti-inflamatorio-calculos.component.scss']
})
export class AntiInflamatorioCalculosComponent {
  @ViewChild(ListaMedicamentosComponent) listaMedicamentosComponent!: ListaMedicamentosComponent;

  backgroundColor: any = '#dc3545';
  antiInflamatorio:any = "Anti-Inflamatório";
  nomeAntiInflamatorio:any;
  dadosAntiInflamatorio: any;
  nomeItem: any;

  constructor(
    private route: ActivatedRoute,
    private medicamentosService: MedicamentosService
  ){
    this.nomeItem = this.route.snapshot.paramMap.get('nomeItem');
  }

    ngOnInit() {
      this.nomeAntiInflamatorio = this.nomeItem;

      this.receberDados(this.nomeAntiInflamatorio);
    }

    receberDados(dados: any) {
      this.medicamentosService.GetAll().subscribe((response: any) => {

        this.dadosAntiInflamatorio  = response.find(function(medicacao : any) { return medicacao.nome == dados; });
        console.log(this.dadosAntiInflamatorio)
      });
    }
}
