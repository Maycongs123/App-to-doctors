import { Component,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaMedicamentosComponent } from 'src/app/components/lista-medicamentos/lista-medicamentos.component';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-laxativos-calculos',
  templateUrl: './laxativos-calculos.component.html',
  styleUrls: ['./laxativos-calculos.component.scss']
})
export class LaxativosCalculosComponent {
  @ViewChild(ListaMedicamentosComponent) listaMedicamentosComponent!: ListaMedicamentosComponent;

  backgroundColor: any = '#dc3545';
  laxativos:any = "Laxativos";
  nomeLaxativos:any;
  dadosLaxativos: any;
  nomeItem: any;

  constructor(
    private route: ActivatedRoute,
    private medicamentosService: MedicamentosService
  ){
    this.nomeItem = this.route.snapshot.paramMap.get('nomeItem');
  }

    ngOnInit() {
      this.nomeLaxativos = this.nomeItem;

      this.receberDados(this.nomeLaxativos);
    }

    receberDados(dados: any) {
      this.medicamentosService.GetAll().subscribe((response: any) => {

        this.dadosLaxativos  = response.find(function(medicacao : any) { return medicacao.nome == dados; });
        console.log(this.dadosLaxativos)
      });
    }
}
