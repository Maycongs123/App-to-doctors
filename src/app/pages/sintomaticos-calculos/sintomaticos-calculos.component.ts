import { Component,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaMedicamentosComponent } from 'src/app/components/lista-medicamentos/lista-medicamentos.component';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-sintomaticos-calculos',
  templateUrl: './sintomaticos-calculos.component.html',
  styleUrls: ['./sintomaticos-calculos.component.scss']
})
export class SintomaticosCalculosComponent {
  @ViewChild(ListaMedicamentosComponent) listaMedicamentosComponent!: ListaMedicamentosComponent;

  backgroundColor: any = '#fd7e14';
  sintomaticos:any = "Sintomáticos";
  nomeSintomaticos:any;
  dadosSintomaticos: any;
  nomeItem: any;

  constructor(
    private route: ActivatedRoute,
    private medicamentosService: MedicamentosService
  ){
    this.nomeItem = this.route.snapshot.paramMap.get('nomeItem');
  }


    ngOnInit() {
      this.nomeSintomaticos = this.nomeItem;

      this.receberDados(this.nomeSintomaticos);
    }

    receberDados(dados: any) {
      this.medicamentosService.GetAll().subscribe((response: any) => {

        this.dadosSintomaticos  = response.find(function(medicacao : any) { return medicacao.nome == dados; });
        console.log(this.dadosSintomaticos)
      });
    }
}
