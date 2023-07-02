import { Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-calculo-medicamentos',
  templateUrl: './calculo-medicamentos.component.html',
  styleUrls: ['./calculo-medicamentos.component.scss']
})
export class CalculoMedicamentosComponent {
  @Input() medicamento: any;
  @Input() listaMedicacoes: any;
  @Input() cor: any;
  @Input() dadosMedicacao: any;
  selecionarIndex: number = -1;
  selecionarCor: string = '';

  

  // listaMedicacoes: any = [
  //   {
  //     id: 0,
  //     nome: "Crianças",
  //     aplicacao: "15 mg/kg/dose"
  //   },
  //   {
  //     id: 1,
  //     nome: "Neonatas (< 26 sem.)",
  //     aplicacao: "7.5 mg/kg/dose"
  //   },
  //   {
  //     id: 2,
  //     nome: "Neonatas (27 a 34 sem.)",
  //     aplicacao: "7.5 mg/kg/dose"
  //   },
  //   {
  //     id: 3,
  //     nome: "Neonatas (35 a 42 sem.)",
  //     aplicacao: "10 mg/kg/dose/IV"
  //   },
  //   {
  //     id: 4,
  //     nome: "Neonatas (> 43 sem.)",
  //     aplicacao: "10 mg/kg/dose/IV"
  //   }
  //   ]

  constructor(private elementRef: ElementRef,  private renderer: Renderer2) {}

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
  
  changeColor(index: number) {
      if (this.selecionarIndex === index) {          
          this.selecionarIndex = -1;
          this.selecionarCor = '';
      } else {          
          this.selecionarIndex = index;
          this.selecionarCor = this.cor;
      }
  }
}
