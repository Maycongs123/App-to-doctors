import { Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

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
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  getNome(getDados: any) {
    debugger
    if(getDados.tipo === "Antibiótico"){
      this.router.navigate(['/antibioticos-calculos', getDados.nome]);
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
