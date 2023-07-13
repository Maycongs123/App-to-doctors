import { Component,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaMedicamentosComponent } from 'src/app/components/lista-medicamentos/lista-medicamentos.component';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-anti-parasitarios-calculos',
  templateUrl: './anti-parasitarios-calculos.component.html',
  styleUrls: ['./anti-parasitarios-calculos.component.scss']
})
export class AntiParasitariosCalculosComponent {
  @ViewChild(ListaMedicamentosComponent) listaMedicamentosComponent!: ListaMedicamentosComponent;

  backgroundColor: any = '#20c997';
  antiParasitarios:any = "Anti-Parasitários";
  nomeAntiParasitarios:any;
  dadosAntiParasitarios: any;
  nomeItem: any;

  constructor(
    private route: ActivatedRoute,
    private medicamentosService: MedicamentosService
  ){
    this.nomeItem = this.route.snapshot.paramMap.get('nomeItem');
  }

    ngOnInit() {
      this.nomeAntiParasitarios = this.nomeItem;

      this.receberDados(this.nomeAntiParasitarios);
    }

    receberDados(dados: any) {
      this.medicamentosService.GetAll().subscribe((response: any) => {

        this.dadosAntiParasitarios  = response.find(function(medicacao : any) { return medicacao.nome == dados; });
        console.log(this.dadosAntiParasitarios)
      });
    }
}
