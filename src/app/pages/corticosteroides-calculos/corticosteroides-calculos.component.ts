import { Component,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaMedicamentosComponent } from 'src/app/components/lista-medicamentos/lista-medicamentos.component';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-corticosteroides-calculos',
  templateUrl: './corticosteroides-calculos.component.html',
  styleUrls: ['./corticosteroides-calculos.component.scss']
})
export class CorticosteroidesCalculosComponent {
  @ViewChild(ListaMedicamentosComponent) listaMedicamentosComponent!: ListaMedicamentosComponent;

  backgroundColor: any = '#007bff';
  corticosteroides:any = "Corticosteróides";
  nomeCorticosteroides:any;
  dadosCorticosteroides: any;
  nomeItem: any;

  constructor(
    private route: ActivatedRoute,
    private medicamentosService: MedicamentosService
  ){
    this.nomeItem = this.route.snapshot.paramMap.get('nomeItem');
  }

    ngOnInit() {
      this.nomeCorticosteroides = this.nomeItem;

      this.receberDados(this.nomeCorticosteroides);
    }

    receberDados(dados: any) {
      this.medicamentosService.GetAll().subscribe((response: any) => {

        this.dadosCorticosteroides  = response.find(function(medicacao : any) { return medicacao.nome == dados; });
        console.log(this.dadosCorticosteroides)
      });
    }
}
