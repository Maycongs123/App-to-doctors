import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaMedicamentosComponent } from 'src/app/components/lista-medicamentos/lista-medicamentos.component';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-anti-convulsivantes-calculos',
  templateUrl: './anti-convulsivantes-calculos.component.html',
  styleUrls: ['./anti-convulsivantes-calculos.component.scss']
})
export class AntiConvulsivantesCalculosComponent {
  @ViewChild(ListaMedicamentosComponent) listaMedicamentosComponent!: ListaMedicamentosComponent;

  backgroundColor: any = '#6f42c1';
  antiConvulsivantes:any = "Anti-Convulsivantes";
  nomeAntiConvulsivantes:any;
  dadosAntiConvulsivantes: any;
  nomeItem: any;

  constructor
  (
    private route: ActivatedRoute,
    private medicamentosService: MedicamentosService
    )
    {
    this.nomeItem = this.route.snapshot.paramMap.get('nomeItem');
    }

    ngOnInit() {
      this.nomeAntiConvulsivantes = this.nomeItem;

      this.receberDados(this.nomeAntiConvulsivantes);
    }

    receberDados(dados: any) {
      this.medicamentosService.GetAll().subscribe((response: any) => {

        this.dadosAntiConvulsivantes  = response.find(function(medicacao : any) { return medicacao.nome == dados; });
        console.log(this.dadosAntiConvulsivantes)
      });
    }
}
