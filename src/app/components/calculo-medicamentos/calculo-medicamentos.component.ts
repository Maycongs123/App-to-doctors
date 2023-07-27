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
  doseCalculo:any;
  ampola: any;
  vazao:any;
  item: any;
  backgroundColor: any;
  volume: any;
  teste: any;
  dosagem: any;
  preparoDiluicao: any;
  administracao: any;
  usoGestacao: any;

  constructor(
    private elementRef: ElementRef,    
    private renderer: Renderer2,
    private route: ActivatedRoute
    ) {
    const dados : any = this.route.snapshot.paramMap.get('medicamento');
    this.item = JSON.parse(decodeURIComponent(dados));
    this.backgroundColor = this.route.snapshot.paramMap.get('backgroundColor');
    this.soroGlicosado = this.item.quantidadeSoro;
  
  }

  ngOnInit(){          
    this.metodoParse();
    this.medicamentoMl = JSON.parse(this.item.quantidadeMl);
    this.medicamentoMg = JSON.parse(this.item.quantidadeMg);  
    this.medicamentoMlReverso = JSON.parse(this.item.quantidadeMl);
    this.medicamentoMgReverso = JSON.parse(this.item.quantidadeMg); 
    this.calculoSolucaoTotal();
    this.calculoSoroGlicosado();
  

    
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
    this.indicacoes = JSON.parse(this.item.indicacao);
    this.contraIndicacoes  = JSON.parse(this.item.contraIndicacao);
    this.dosagem =  JSON.parse(this.item.dose);
    this.preparoDiluicao =  JSON.parse(this.item.preparoDiluicao);
    this.administracao = JSON.parse(this.item.administracao);
    this.usoGestacao = JSON.parse(this.item.usoGestacao);  

    const quantidadeMlArray = JSON.parse(this.item.quantidadeMg);
    const quantidadeMgArray  = JSON.parse(this.item.quantidadeMl);

    for (let i = 0; i < quantidadeMlArray.length || i < quantidadeMgArray.length; i++) {      
      const key = `${i}`;
      this.dadosMedicamentos[key] = {
        quantidadeMg: parseFloat(quantidadeMlArray[i]),
        quantidadeMl: parseFloat(quantidadeMgArray[i])
      };    
    }   
  }

  calculoMgKg(){  
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
      const resultado = (this.doseCalculo * this.peso * 60)/(this.medicamentoMg[i]/(this.soroGlicosado + this.medicamentoMl[i]) * 1000);
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
      const resultado = (this.doseCalculo * 60)/(this.medicamentoMg[i]/(this.soroGlicosado + this.medicamentoMl[i]) * 1000);
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
      const resultado = (this.volume * this.medicamentoMgReverso[i] * this.item.numeroDoses) / (this.peso * this.medicamentoMlReverso[i]);
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
      const resultado = (this.vazao * ( this.medicamentoMgReverso[i] /(this.soroGlicosado + this.medicamentoMlReverso[i]) * 1000)) / (this.peso * 60);
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
      const resultado = (this.vazao * (this.medicamentoMgReverso[i] / (this.soroGlicosado + this.medicamentoMlReverso[i]) * 1000)) / 60;
      const key = `${i}`;
      this.resultadoMcgMinReverso[key] = {
        resultado: resultado,
        quantidadeMg: this.dadosMedicamentos[i].quantidadeMg,
        quantidadeMl: this.dadosMedicamentos[i].quantidadeMl
      }
    }
  }

  calculoSolucaoTotal(){    
   this.solucaoTotal = this.soroGlicosado + parseFloat(this.medicamentoMl || this.medicamentoMlReverso);
  }

  calculoSoroGlicosado() {
    
    this.soroGlicosado = this.solucaoTotal - parseFloat(this.medicamentoMl || this.medicamentoMlReverso);
  }
}
