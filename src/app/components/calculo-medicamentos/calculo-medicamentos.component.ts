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
  @Input() cor: any;
  @Input() dadosMedicacao: any;
  indicacoes: any = [];
  contraIndicacoes: any = [];
  resultadoMgKg: any = [];
  resultadoMgKgReverso: any = [];
  dadosMedicamentos: any = [];
  resultadoMcgKg: any = []
  resultadoMcgKgReverso: any = []
  resultadoMcgMin: any = []
  resultadoMcgMinReverso: any = []
  solucaoTotal: any;
  soroGlicosado: any;
  medicamentoMl: any;
  medicamentoMg: any;
  medicamentoMlReverso: any;
  medicamentoMgReverso: any;
  peso: any;
  dose:any;
  ampola: any;
  vazao:any;
  item: any;
  backgroundColor: any;
  volume: any;

  constructor(
    private elementRef: ElementRef,    
    private renderer: Renderer2,
    private route: ActivatedRoute
    ) {
    const dados : any = this.route.snapshot.paramMap.get('medicamento');
    this.item = JSON.parse(decodeURIComponent(dados));
    this.backgroundColor = this.route.snapshot.paramMap.get('backgroundColor');
    this.soroGlicosado = this.item.quantidadeSoro;
    console.log(this.item, this.backgroundColor, this.soroGlicosado)
  }

  ngOnInit(){   
    debugger
    this.metodoParse();
    this.medicamentoMl = JSON.parse(this.item.quantidadeMl);
    this.medicamentoMg = JSON.parse(this.item.quantidadeMg);  
    this.medicamentoMlReverso = JSON.parse(this.item.quantidadeMl);
    this.medicamentoMgReverso = JSON.parse(this.item.quantidadeMg); 
    this.calculoSolucaoTotal();
    this.calculoSoroGlicosado();
    console.log(this.medicamentoMl)
    console.log(this.medicamentoMg)
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

  metodoParse(){    
    debugger
    const indicacoesArray = JSON.parse(this.item.indicacao);
    const contraIndicacoesArray  = JSON.parse(this.item.contraIndicacao);
    const quantidadeMlArray = JSON.parse(this.item.quantidadeMg);
    const quantidadeMgArray  = JSON.parse(this.item.quantidadeMl);

    for (let i = 0; i < indicacoesArray.length; i++) {
      const key = `${i}`;
      this.indicacoes[key] = indicacoesArray[i];
    }

    for (let i = 0; i < contraIndicacoesArray.length; i++) {
      const key = `${i}`;
      this.contraIndicacoes[key] = contraIndicacoesArray[i];
    }

    for (let i = 0; i < quantidadeMlArray.length || i < quantidadeMgArray.length; i++) {
      debugger
      const key = `${i}`;
      this.dadosMedicamentos[key] = {
        quantidadeMg: parseFloat(quantidadeMlArray[i]),
        quantidadeMl: parseFloat(quantidadeMgArray[i])
      };    
    }    
  }

  calculoMgKg(){  
    debugger
    for (let i = 0; i < this.dadosMedicamentos.length; i++) {
      const resultado = (this.peso * this.item.quantidadeMgKg * this.dadosMedicamentos[i].quantidadeMl) / (this.dadosMedicamentos[i].quantidadeMg * this.item.numeroDoses);
      const key = `${i}`;
      this.resultadoMgKg[key] = {
        resultado: resultado,
        quantidadeMg: this.dadosMedicamentos[i].quantidadeMg,
        quantidadeMl: this.dadosMedicamentos[i].quantidadeMl
      }
    }  
  }

  calculoMcgKg(){  
    for (let i = 0; i < this.dadosMedicamentos.length; i++) {
      const resultado = (this.dose * this.peso * 60)/(this.medicamentoMg/(this.item.quantidadeSoro + this.medicamentoMl) * 1000);
      const key = `${i}`;
      this.resultadoMcgKg[key] = {
        resultado: resultado,
        quantidadeMg: this.dadosMedicamentos[i].quantidadeMg,
        quantidadeMl: this.dadosMedicamentos[i].quantidadeMl
      }
    } 
  }

  calculoMcgMin(){
    
    for (let i = 0; i < this.dadosMedicamentos.length; i++) {
      const resultado = (this.dose * 60)/(this.medicamentoMg/(this.item.quantidadeSoro + this.medicamentoMl) * 1000);
      const key = `${i}`;
      this.resultadoMcgMin[key] = {
        resultado: resultado,
        quantidadeMg: this.dadosMedicamentos[i].quantidadeMg,
        quantidadeMl: this.dadosMedicamentos[i].quantidadeMl
      }
    } 
  }


  calculoMgKgReverso(){  
    for (let i = 0; i < this.dadosMedicamentos.length; i++) {
      const resultado = (this.volume * this.medicamentoMgReverso * this.item.numeroDoses) / (this.peso * this.medicamentoMlReverso);
      const key = `${i}`;
      this.resultadoMgKgReverso[key] = {
        resultado: resultado,
        quantidadeMg: this.dadosMedicamentos[i].quantidadeMg,
        quantidadeMl: this.dadosMedicamentos[i].quantidadeMl
      }
    }  
  }

  calculoMcgKgReverso(){
    for (let i = 0; i < this.dadosMedicamentos.length; i++) {
      const resultado = (this.vazao * ( this.medicamentoMgReverso /(this.item.quantidadeSoro + this.medicamentoMlReverso) * 1000)) / (this.peso * 60);
      const key = `${i}`;
      this.resultadoMcgKgReverso[key] = {
        resultado: resultado,
        quantidadeMg: this.dadosMedicamentos[i].quantidadeMg,
        quantidadeMl: this.dadosMedicamentos[i].quantidadeMl
      }
    }
    
  }

  calculoMcgMinReverso(){
    for (let i = 0; i < this.dadosMedicamentos.length; i++) {
      const resultado = (this.vazao * (this.medicamentoMgReverso / (this.item.quantidadeSoro + this.medicamentoMlReverso) * 1000)) / 60;
      const key = `${i}`;
      this.resultadoMcgMinReverso[key] = {
        resultado: resultado,
        quantidadeMg: this.dadosMedicamentos[i].quantidadeMg,
        quantidadeMl: this.dadosMedicamentos[i].quantidadeMl
      }
    }
  }

  calculoSolucaoTotal(){
    debugger
   this.solucaoTotal = this.soroGlicosado + parseFloat(this.medicamentoMl || this.medicamentoMlReverso);
  }

  calculoSoroGlicosado() {
    debugger
    this.soroGlicosado = this.solucaoTotal - parseFloat(this.medicamentoMl || this.medicamentoMlReverso);
  }
}
