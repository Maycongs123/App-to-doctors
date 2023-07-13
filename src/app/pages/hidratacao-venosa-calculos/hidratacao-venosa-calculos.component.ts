import { Component,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaMedicamentosComponent } from 'src/app/components/lista-medicamentos/lista-medicamentos.component';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-hidratacao-venosa-calculos',
  templateUrl: './hidratacao-venosa-calculos.component.html',
  styleUrls: ['./hidratacao-venosa-calculos.component.scss']
})
export class HidratacaoVenosaCalculosComponent {
  @ViewChild(ListaMedicamentosComponent) listaMedicamentosComponent!: ListaMedicamentosComponent;

  backgroundColor: any = '#ffc107';
  hidratacaoVenosa:any = "Hidratação Venosa";
  nomeHidratacaoVenosa:any;
  dadosHidratacaoVenosa: any;
  nomeItem: any;

  constructor(
    private route: ActivatedRoute,
    private medicamentosService: MedicamentosService
  ){
    this.nomeItem = this.route.snapshot.paramMap.get('nomeItem');
  }

    ngOnInit() {
      this.nomeHidratacaoVenosa = this.nomeItem;

      this.receberDados(this.nomeHidratacaoVenosa);
    }

    receberDados(dados: any) {
      this.medicamentosService.GetAll().subscribe((response: any) => {

        this.dadosHidratacaoVenosa  = response.find(function(medicacao : any) { return medicacao.nome == dados; });
        console.log(this.dadosHidratacaoVenosa)
      });
    }
}
