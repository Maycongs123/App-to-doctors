import { Component, ElementRef, HostListener, Input, Renderer2, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calculo-medicamentos',
  templateUrl: './calculo-medicamentos.component.html',
  styleUrls: ['./calculo-medicamentos.component.scss']
})
export class CalculoMedicamentosComponent implements OnInit{
  @Input() medicamento: any;
  // @Input() listaMedicacoes: any;
  @Input() cor: any;
  @Input() dadosMedicacao: any;
  indicacoes: any = [];
  contraIndicacoes: any = [];
  resultadoMgKg: any;
  resultadoMcgKg: any;
  resultadoMcgKgReverso: any;
  resultadoMcgMin: any;
  resultadoMcgMinReverso: any;
  peso: any;
  dose:any;
  ampola: any;
  vazao:any;
  item: any;
  backgroundColor: any;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private route: ActivatedRoute
    ) {
    const dados : any = this.route.snapshot.paramMap.get('medicamento');
    this.item = JSON.parse(decodeURIComponent(dados));
    this.backgroundColor = this.route.snapshot.paramMap.get('backgroundColor');
  }

  ngOnInit(){
    console.log(this.item , this.backgroundColor)
    this.metodoSpint();
  }

  @HostListener('window:click')
  @HostListener('window:load')
  onLoad(){
    const elements = this.elementRef.nativeElement.querySelectorAll('.span-style');
    elements.forEach((element: HTMLElement) => {
      this.renderer.setStyle(element, 'background', this.backgroundColor);
      this.renderer.setStyle(element, 'transition', 'all 0.4s ease-out');
    });
    this.elementRef.nativeElement.querySelector('.div-header').style.background = this.backgroundColor;
    this.elementRef.nativeElement.querySelector('.div-header').style.transition = 'all 0.4s ease-out';
  }

  back(){
    history.back()
  }

  metodoSpint(){
    debugger
    console.log(this.item)
    const indicacoesArray = this.item.indicacao.split("\\*");
    const contraIndicacoesArray  = this.item.contraIndicacao.split("\\*");

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

  calculoMgKg(){
    debugger
    this.resultadoMgKg = (this.peso * this.item.quantidadeMgKg * this.item.quantidadeMl) / (this.item.quantidadeMg * this.dose);
  }

  calculoMcgKg(){
    debugger
    this.resultadoMcgKg = (this.dose * this.peso * 60)/((this.item.quantidadeMg * this.ampola)/(this.item.quantidadeSoro + (this.item.quantidadeMl * this.ampola)) * 1000);
  }

  calculoMcgMin(){
    debugger
    this.resultadoMcgMin = (this.dose * 60) / ((this.item.quantidadeMg / (this.item.quantidadeSoro + this.item.quantidadeMl)) * 1000);
  }

  calculoMcgKgReverso(){
    debugger
    this.resultadoMcgKgReverso = (this.vazao * ((this.item.quantidadeMg * this.ampola)/(this.item.quantidadeSoro + (this.item.quantidadeMl * this.ampola)) * 1000)) / (this.peso * 60);
  }

  calculoMcgMinReverso(){
    debugger
    this.resultadoMcgMinReverso = (this.vazao * ((this.item.quantidadeMg * this.ampola)/(this.item.quantidadeSoro + (this.item.quantidadeMl * this.ampola)) * 1000) * this.ampola) /  60;
  }
}
