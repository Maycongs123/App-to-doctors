import { Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-calculo-medicamentos',
  templateUrl: './calculo-medicamentos.component.html',
  styleUrls: ['./calculo-medicamentos.component.scss']
})
export class CalculoMedicamentosComponent {
  @Input() medicamento: any;
  // @Input() listaMedicacoes: any;
  @Input() cor: any;
  @Input() dadosMedicacao: any;
  selecionarIndex: number = -1;
  selecionarCor: string = '';
  indicacoes: any = [];
  contraIndicacoes: any = [];

  constructor(private elementRef: ElementRef,  private renderer: Renderer2) {}

  ngOnChanges(): void {
    debugger
      console.log(this.dadosMedicacao);
      this.metodoSpint();
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

  changeColor(index: number) {
      if (this.selecionarIndex === index) {
          this.selecionarIndex = -1;
          this.selecionarCor = '';
      } else {
          this.selecionarIndex = index;
          this.selecionarCor = this.cor;
      }
  }

  back(){
    history.back()
  }

  metodoSpint(){
    debugger
    console.log(this.dadosMedicacao)
    const indicacoesArray = this.dadosMedicacao.indicacao.split("\\*");
    const contraIndicacoesArray  = this.dadosMedicacao.contraIndicacao.split("\\*");

    for (let i = 0; i < indicacoesArray.length; i++) {
      const key = `${i}`;
      this.indicacoes[key] = indicacoesArray[i];
    }

    for (let i = 0; i < contraIndicacoesArray.length; i++) {
      const key = `${i}`;
      this.contraIndicacoes[key] = indicacoesArray[i];
    }
    console.log(this.indicacoes , this.contraIndicacoes)
  }

  resultadoMgKg: any;
  resultadoMcgKg: any;
  resultadoMcgKgReverso: any;
  resultadoMcgMin: any;
  resultadoMcgMinReverso: any;
  peso: any;
  dose:any;
  ampola: any;
  vazao:any;

  calculoMgKg(){
    debugger
    this.resultadoMgKg = (this.peso * this.dadosMedicacao.quantidadeMgKg * this.dadosMedicacao.quantidadeMl) / (this.dadosMedicacao.quantidadeMg * this.dose);
  }

  calculoMcgKg(){
    debugger
    this.resultadoMcgKg = (this.dose * this.peso * 60)/((this.dadosMedicacao.quantidadeMg * this.ampola)/(this.dadosMedicacao.quantidadeSoro + (this.dadosMedicacao.quantidadeMl * this.ampola)) * 1000);
  }

  calculoMcgMin(){
    debugger
    this.resultadoMcgMin = (this.dose * 60) / ((this.dadosMedicacao.quantidadeMg / (this.dadosMedicacao.quantidadeSoro + this.dadosMedicacao.quantidadeMl)) * 1000);
  }

  calculoMcgKgReverso(){
    debugger
    this.resultadoMcgKgReverso = (this.vazao * ((this.dadosMedicacao.quantidadeMg * this.ampola)/(this.dadosMedicacao.quantidadeSoro + (this.dadosMedicacao.quantidadeMl * this.ampola)) * 1000)) / (this.peso * 60);
  }

  calculoMcgMinReverso(){
    debugger
    this.resultadoMcgMinReverso = (this.vazao * ((this.dadosMedicacao.quantidadeMg * this.ampola)/(this.dadosMedicacao.quantidadeSoro + (this.dadosMedicacao.quantidadeMl * this.ampola)) * 1000) * this.ampola) /  60;
  }
}
