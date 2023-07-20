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
  ) {}

  getNome(getDados: any) {
    debugger
    if(getDados.tipo === "Antibiótico"){
      let backgroundColor = '#007bff';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/calculos', dados, backgroundColor]);
    }

    if(getDados.tipo === "Anti-Convulsivante"){
      let backgroundColor = '#6f42c1';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/calculos', dados, backgroundColor]);
    }

    if(getDados.tipo === "Anti-Inflamatório"){
      let backgroundColor = '#dc3545';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/calculos', dados, backgroundColor]);
    }

    if(getDados.tipo === "Anti-Fúngico"){
      let backgroundColor = '#ffc107';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/calculos', dados, backgroundColor]);
    }

    if(getDados.tipo === "Anti-Histaminico"){
      let backgroundColor = '#28a745';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/calculos', dados, backgroundColor]);
    }

    if(getDados.tipo === "Anti-Parasitario"){
      let backgroundColor = '#3bb54a';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/calculos', dados, backgroundColor]);
    }

    if(getDados.tipo === "Broncodilatadores"){
      let backgroundColor = '#6f42c1';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/calculos', dados, backgroundColor]);
    }

    if(getDados.tipo === "Corticosteroide"){
      let backgroundColor = '007bff';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/calculos', dados, backgroundColor]);
    }

    if(getDados.tipo === "Laxativo"){
      let backgroundColor = '#dc3545';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/calculos', dados, backgroundColor]);
    }

    if(getDados.tipo === "Sintomatico"){
      let backgroundColor = '#fd7e14';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/calculos', dados, backgroundColor]);
    }

    if(getDados.tipo === "Hidratação Venosa"){
      let backgroundColor = '#ffc107';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/calculos', dados, backgroundColor]);
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
