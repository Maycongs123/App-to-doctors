import { Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-lista-medicamentos',
  templateUrl: './lista-medicamentos.component.html',
  styleUrls: ['./lista-medicamentos.component.scss']
})
export class ListaMedicamentosComponent {
  @Input() medicamento: any;
  @Input() listaMedicacoes: any;
  @Input() cor: any;
  @Output() dadosEnviados = new EventEmitter<string>();

  constructor(
    protected elementRef: ElementRef,
    protected renderer: Renderer2,
    protected router: Router,
    protected medicamentosService: MedicamentosService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event.url); // Exibir a URL da rota
      }
    });
  }

  getNome(getDados: any) {
    debugger
    if(getDados.tipo === "Antibiótico"){
      let backgroundColor = '#007bff';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/calculos', dados, backgroundColor]);
    }

    if(getDados.tipo === "Anti-Convulsivante"){
      this.router.navigate(['/anti-convulsivantes-calculos', getDados.nome]);
    }
    if(getDados.tipo === "Anti-Inflamatório"){
      this.router.navigate(['/anti-inflamatorio-calculos', getDados.nome]);
    }
    if(getDados.tipo === "Anti-Fúngico"){
      this.router.navigate(['/anti-fungicos-calculos', getDados.nome]);
    }
    if(getDados.tipo === "Anti-Histaminico"){
      this.router.navigate(['/anti-histamicos-calculos', getDados.nome]);
    }
    if(getDados.tipo === "Anti-Parasitario"){
      this.router.navigate(['/anti-parasitario-calculos', getDados.nome]);
    }
    if(getDados.tipo === "Broncodilatadore"){
      this.router.navigate(['/broncodilatadores-calculos', getDados.nome]);
    }
    if(getDados.tipo === "Corticosteroide"){
      this.router.navigate(['/corticosteroides-calculos', getDados.nome]);
    }
    if(getDados.tipo === "Laxativo"){
      this.router.navigate(['/laxativos-calculos', getDados.nome]);
    }
    if(getDados.tipo === "Sintomatico"){
      this.router.navigate(['/sintomaticos-calculos', getDados.nome]);
    }
    if(getDados.tipo === "Hidratação Venosa"){
      this.router.navigate(['/hidratacao-venosa-calculos', getDados.nome]);
    }
  }

  @HostListener('window:click')
  @HostListener('window:load')
  onLoad(){
    const elements = this.elementRef.nativeElement.querySelectorAll('.span-style');
    elements.forEach((element: HTMLElement) => {
      this.renderer.setStyle(element, 'background', this.cor);
      this.renderer.setStyle(element, 'transition', 'all 0.4s ease-out');
    });
    this.elementRef.nativeElement.querySelector('.div-header').style.background = this.cor;
    this.elementRef.nativeElement.querySelector('.div-header').style.transition = 'all 0.4s ease-out';
  }

  back(){
    history.back()
  }
}
