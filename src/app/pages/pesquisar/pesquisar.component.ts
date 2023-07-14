import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaMedicamentosComponent } from 'src/app/components/lista-medicamentos/lista-medicamentos.component';
import { Medicamento } from 'src/app/model/medicamento';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PesquisarComponent extends ListaMedicamentosComponent {

  constructor(
    override  elementRef: ElementRef,
    override  renderer: Renderer2,
    override  router: Router,
    override  medicamentosService: MedicamentosService,
    private route: ActivatedRoute,
  )
  {
    super(
      elementRef,
      renderer,
      router,
      medicamentosService
    )
  }

  medicacoes: Medicamento[] = [];
  termoPesquisa: string = '';


  ngOnInit(): void {
    this.medicamentosService.GetAll().subscribe((response: any) => {
      this.medicacoes = response
      this.getTipoMedicamentoClass(response.tipo)
    });
  }

  filtrarMedicacoes(): Medicamento[] {
    if (this.termoPesquisa.trim() === '') {
      return this.medicacoes;
    } else {
      return this.medicacoes.filter((medicacao: any) => {
        return medicacao.nome.toLowerCase().includes(this.termoPesquisa.toLowerCase());
      });
    }
  }

  calculadora(medicamento: any){
    super.getNome(medicamento)
  }

  getTipoMedicamentoClass(tipo: any) {
    switch (tipo) {
      case 'Antibiótico':
        return 'tipo-Antibiotico';
      case 'Anti-Convulsivante':
        return 'tipo-Convulsivante';
      case 'Anti-Inflamatório':
        return 'tipo-Inflamatorio';
      case 'Anti-Fungico':
        return 'tipo-Fungico';
      case 'Anti-Histamínico':
        return 'tipo-Histaminico';
      case 'Anti-Parasitário':
        return 'tipo-Parasitario';
      case 'Broncodilatadores':
          return 'tipo-Broncodilatadores';
      case 'Corticosteróide':
          return 'tipo-Corticosteroide';
      case 'Laxativo':
          return 'tipo-Laxativo';
      case 'Sintomático':
        return 'tipo-Sintomatico';
      case 'Hidratação Venosa':
        return 'tipo-Hidratacao';
      default:
        return '';
    }
  }

  home(): void{
    this.router.navigate(['/'], { relativeTo: this.route });
  }
}
