import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaMedicamentosComponent } from 'src/app/components/lista-medicamentos/lista-medicamentos.component';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-anti-histaminicos-calculos',
  templateUrl: './anti-histaminicos-calculos.component.html',
  styleUrls: ['./anti-histaminicos-calculos.component.scss']
})
export class AntiHistaminicosCalculosComponent {
  @ViewChild(ListaMedicamentosComponent) listaMedicamentosComponent!: ListaMedicamentosComponent;

  backgroundColor: any = '#28a745';
  antiHistaminicos:any = "Anti-Histaminicos";
  nomeAntiHistaminicos:any;
  dadosAntiHistaminicos: any;
  nomeItem: any;

  constructor(
    private route: ActivatedRoute,
    private medicamentosService: MedicamentosService
    ){
    this.nomeItem = this.route.snapshot.paramMap.get('nomeItem');
    }

    ngOnInit() {
      this.nomeAntiHistaminicos = this.nomeItem;

      this.receberDados(this.nomeAntiHistaminicos);
    }

    receberDados(dados: any) {
      this.medicamentosService.GetAll().subscribe((response: any) => {

        this.dadosAntiHistaminicos  = response.find(function(medicacao : any) { return medicacao.nome == dados; });
        console.log(this.dadosAntiHistaminicos)
      });
    }
}
