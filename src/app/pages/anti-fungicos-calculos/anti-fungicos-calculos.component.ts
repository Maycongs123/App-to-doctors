import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaMedicamentosComponent } from 'src/app/components/lista-medicamentos/lista-medicamentos.component';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-anti-fungicos-calculos',
  templateUrl: './anti-fungicos-calculos.component.html',
  styleUrls: ['./anti-fungicos-calculos.component.scss']
})
export class AntiFungicosCalculosComponent {
  @ViewChild(ListaMedicamentosComponent) listaMedicamentosComponent!: ListaMedicamentosComponent;

  backgroundColor: any = '#ffc107';
  antiFungicos:any = "Anti-Fúngicos";
  nomeAntiFungicos:any;
  dadosAntiFungicos: any;
  nomeItem: any;

  constructor(
    private route: ActivatedRoute,
    private medicamentosService: MedicamentosService)
  {
    this.nomeItem = this.route.snapshot.paramMap.get('nomeItem');
  }

    ngOnInit() {
      this.nomeAntiFungicos = this.nomeItem;

      this.receberDados(this.nomeAntiFungicos);
    }

    receberDados(dados: any) {
      this.medicamentosService.GetAll().subscribe((response: any) => {

        this.dadosAntiFungicos  = response.find(function(medicacao : any) { return medicacao.nome == dados; });
        console.log(this.dadosAntiFungicos)
      });
    }
}
