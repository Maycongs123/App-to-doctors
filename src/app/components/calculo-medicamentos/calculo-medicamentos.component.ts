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
  resultadoMcgKg: any = [];
  resultadoMcgKgPediatrico: any = []
  resultadoMcgKgReverso: any = [];
  resultadoMcgMin: any = [];
  resultadoMcgMinReverso: any = [];
  solucaoTotal: any;
  solucaoTotalReverso: any;
  soroGlicosado: any;
  soroGlicosadoReverso: any;
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
  dosagemMgKg: any;
  atendimento: any;
  disfuncaoRenal: string = 'não';
  genero: string = 'masculino';
  idade: any;
  clearanceCreatinina: any;
  creatina: any;
  idadeCalculoRenal: any;
  altura: any;
  calculoRenal: any = "Sim";
  correcaoMl: any;
  rediluicao: any;

  constructor(
    private elementRef: ElementRef,    
    private renderer: Renderer2,
    private route: ActivatedRoute
    ) {
    const dados : any = this.route.snapshot.paramMap.get('medicamento');
    this.item = JSON.parse(decodeURIComponent(dados));
    this.backgroundColor = this.route.snapshot.paramMap.get('backgroundColor');
    this.soroGlicosado = this.item.quantidadeSoro;
    this.soroGlicosadoReverso = this.item.quantidadeSoro;
    this.atendimento = localStorage.getItem('tipoAtendimento');        
    console.log(this.item.calculoRenal)
  }

  ngOnInit(){          
    this.metodoParse();
    this.calculoSolucaoTotal();
    this.calculoSoroGlicosado();
    this.calculoSolucaoTotalReverso();
    this.calculoSoroGlicosadoReverso();
  }

  generos: any[] = [
    {value: 1, viewValue: 'Masculino'},
    {value: 2, viewValue: 'Feminino'}    
  ];

  idades: any[] = [
    {value: 0.33, viewValue: 'Recém-nascido pré-termo'},
    {value: 0.45, viewValue: 'Recém-nascido a termo e crianças de até 2 anos'},
    {value: 0.55, viewValue: 'Maiores de 2 anos e adolescentes do sexo feminino'}, 
    {value: 0.70, viewValue: 'Adolescentes do sexo masculino'},     
  ];

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
    this.medicamentoMl = JSON.parse(this.item.quantidadeMl);
    this.medicamentoMg = JSON.parse(this.item.quantidadeMg);  
    this.medicamentoMlReverso = JSON.parse(this.item.quantidadeMl);
    this.medicamentoMgReverso = JSON.parse(this.item.quantidadeMg);  
    this.indicacoes = JSON.parse(this.item.indicacao);
    this.contraIndicacoes  = JSON.parse(this.item.contraIndicacao);
    this.dosagem =  JSON.parse(this.item.dose);
    this.preparoDiluicao =  JSON.parse(this.item.preparoDiluicao);
    this.administracao = JSON.parse(this.item.administracao);
    this.usoGestacao = JSON.parse(this.item.usoGestacao);  
    this.dosagemMgKg = this.item.quantidadeMgKg;
    
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
    var pesoLimitado;
    var quantidadeMgCalculoRenal = 1;

    this.calculoClearanceCreatininaAdulto();

    if(this.atendimento === "Pediatrico" && this.calculoRenal === "Sim"){
      this.calculoClearanceCreatininaCrianca();
      quantidadeMgCalculoRenal = 1000
    }

    var pesoLimitado;


    if(this.idade <= 10){
      pesoLimitado = (this.idade * 2) + 8;
      
      for (let i = 0; i < this.dadosMedicamentos.length; i++) {    
        const resultado = (pesoLimitado * this.dosagemMgKg * this.dadosMedicamentos[i].quantidadeMl) / (this.dadosMedicamentos[i].quantidadeMg * this.item.numeroDoses * quantidadeMgCalculoRenal);
        this.correcaoMl = resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        const key = `${i}`;
        this.resultadoMgKg[key] = {
          resultado: resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
          quantidadeMg: this.dadosMedicamentos[i].quantidadeMg,
          quantidadeMl: this.dadosMedicamentos[i].quantidadeMl
        }
      } 
      this.calculoCorrecao();
      return;
    }  
    
    for (let i = 0; i < this.dadosMedicamentos.length; i++) {
      const resultado = (this.peso * this.dosagemMgKg* this.dadosMedicamentos[i].quantidadeMl) / (this.dadosMedicamentos[i].quantidadeMg * this.item.numeroDoses * quantidadeMgCalculoRenal);
      const key = `${i}`;
      this.resultadoMgKg[key] = {
        resultado: resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
        quantidadeMg: this.dadosMedicamentos[i].quantidadeMg,
        quantidadeMl: this.dadosMedicamentos[i].quantidadeMl
      }
    }  

    this.calculoCorrecao();
  }

  calculoMcgKg(){
    var qntMg = this.medicamentoMg[0] || this.medicamentoMg;
    var qntMl = this.medicamentoMl[0] || this.medicamentoMl;

    for (let i = 0; i < this.dadosMedicamentos.length; i++) {
      const resultado = (this.doseCalculo * this.peso * 60)/(qntMg/(this.soroGlicosado + qntMl) * 1000);
      const key = `${i}`;
      this.resultadoMcgKg[key] = {
        resultado: resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
        quantidadeMg: this.medicamentoMg,
        quantidadeMl: this.medicamentoMl
      }
    } 
  }

  calculoMcgKgPediatrico(){
    var qntMg = this.medicamentoMg[0] || this.medicamentoMg;
    var qntMl = this.medicamentoMl[0] || this.medicamentoMl;
    var pesoLimitado;

    if(this.idade <= 10){
      pesoLimitado = (this.idade * 2) + 8;
      
      for (let i = 0; i < this.dadosMedicamentos.length; i++) {
        const resultado = (this.doseCalculo * pesoLimitado * (1440 / ((qntMg/qntMl) * 1000)));
        const soroFisologico = 24 - resultado;
        const key = `${i}`;
        this.resultadoMcgKgPediatrico[key] = {
          resultado: resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
          soroFisologico: soroFisologico,
          quantidadeMg: this.medicamentoMg,
          quantidadeMl: this.medicamentoMl        
        }
      }
      return;
    } 
      
    for (let i = 0; i < this.dadosMedicamentos.length; i++) {
      const resultado = (this.doseCalculo * this.peso * (1440 / ((qntMg/qntMl) * 1000)));
      const soroFisologico = 24 - resultado;
      const key = `${i}`;
      this.resultadoMcgKgPediatrico[key] = {
        resultado: resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
        soroFisologico: soroFisologico,
        quantidadeMg: this.medicamentoMg,
        quantidadeMl: this.medicamentoMl        
      }
    } 
  }

  calculoMcgMin(){  
    var qntMg = this.medicamentoMg[0] || this.medicamentoMg
    var qntMl = this.medicamentoMl[0] || this.medicamentoMl  
    for (let i = 0; i < this.dadosMedicamentos.length; i++) {
      const resultado = (this.doseCalculo * 60)/(qntMg/(this.soroGlicosado + qntMl) * 1000);
      const key = `${i}`;
      this.resultadoMcgMin[key] = {
        resultado: resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
        quantidadeMg: this.medicamentoMg,
        quantidadeMl: this.medicamentoMl
      }
    } 
  }


  calculoMgKgReverso(){   
    var pesoLimitado;

    if(this.idade <= 10){
      pesoLimitado = (this.idade * 2) + 8;
      
      for (let i = 0; i < this.dadosMedicamentos.length; i++) {
        const resultado = (this.volume * this.medicamentoMgReverso[i] * this.item.numeroDoses) / (pesoLimitado * this.medicamentoMlReverso[i]);
        const key = `${i}`;
        this.resultadoMgKgReverso[key] = {
          resultado: resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
          quantidadeMg: this.dadosMedicamentos[i].quantidadeMg,
          quantidadeMl: this.dadosMedicamentos[i].quantidadeMl
        }
      } 
      return;
    } 

    for (let i = 0; i < this.dadosMedicamentos.length; i++) {
      const resultado = (this.volume * this.medicamentoMgReverso[i] * this.item.numeroDoses) / (this.peso * this.medicamentoMlReverso[i]);
      const key = `${i}`;
      this.resultadoMgKgReverso[key] = {
        resultado: resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
        quantidadeMg: this.dadosMedicamentos[i].quantidadeMg,
        quantidadeMl: this.dadosMedicamentos[i].quantidadeMl
      }
    }  
  }

  calculoMcgKgReverso(){  
    var qntMg = this.medicamentoMgReverso[0] || this.medicamentoMgReverso
    var qntMl = this.medicamentoMlReverso[0] || this.medicamentoMlReverso
    var pesoLimitado;

    if(this.idade <= 10){
      pesoLimitado = (this.idade * 2) + 8;
      
      for (let i = 0; i < this.dadosMedicamentos.length; i++) {
        const resultado = (this.vazao * ((qntMg) /(this.soroGlicosadoReverso + qntMl) * 1000)) / (pesoLimitado * 60);
        const key = `${i}`;
        this.resultadoMcgKgReverso[key] = {
          resultado: resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
          quantidadeMg: this.medicamentoMgReverso,
          quantidadeMl: this.medicamentoMlReverso
        }
      }
      return;
    } 

    for (let i = 0; i < this.dadosMedicamentos.length; i++) {
      const resultado = (this.vazao * ((qntMg) /(this.soroGlicosadoReverso + qntMl) * 1000)) / (this.peso * 60);
      const key = `${i}`;
      this.resultadoMcgKgReverso[key] = {
        resultado: resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
        quantidadeMg: this.medicamentoMgReverso,
        quantidadeMl: this.medicamentoMlReverso
      }
    }
    
  }

  calculoMcgMinReverso(){   
    var qntMg = this.medicamentoMgReverso[0] || this.medicamentoMgReverso
    var qntMl = this.medicamentoMlReverso[0] || this.medicamentoMlReverso
    for (let i = 0; i < this.dadosMedicamentos.length; i++) {
      const resultado = (this.vazao * (qntMg / (this.soroGlicosadoReverso + qntMl) * 1000)) / 60;
      const key = `${i}`;
      this.resultadoMcgMinReverso[key] = {
        resultado: resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
        quantidadeMg: this.medicamentoMgReverso,
        quantidadeMl: this.medicamentoMlReverso     
      }
    }
  }

  calculoSolucaoTotal(){    
   this.solucaoTotal = this.soroGlicosado + parseFloat(this.medicamentoMl);
  }

  calculoSoroGlicosado() {    
    this.soroGlicosado = this.solucaoTotal - parseFloat(this.medicamentoMl);
  }

  calculoSolucaoTotalReverso(){    
    this.solucaoTotalReverso = this.soroGlicosadoReverso + parseFloat(this.medicamentoMlReverso);
   }

   calculoSoroGlicosadoReverso() {    
    this.soroGlicosadoReverso = this.solucaoTotalReverso - parseFloat(this.medicamentoMlReverso);
  }

  calculoClearanceCreatininaAdulto(){
    let fatorCorrecao;

    if(this.genero === 'masculino'){
      fatorCorrecao = 1;
      this.clearanceCreatinina = (((140 - this.idade) * this.peso) / (72 * this.creatina)) * fatorCorrecao;
    }else{
      fatorCorrecao = 0.85;
      this.clearanceCreatinina = (((140 - this.idade) * this.peso) / (72 * this.creatina)) * fatorCorrecao;
    }
  } 

  calculoClearanceCreatininaCrianca(){
    let constanteK: any;
   
    switch (this.idadeCalculoRenal) {
      case 0.33:
        constanteK = 0.33;
        break;
      case 0.45:
        constanteK = 0.45;
        break;  
      case 0.55:
        constanteK = 0.55;
        break;   
      case 0.70:
        constanteK = 0.70;
        break;
      default:
        break;
    }

    this.clearanceCreatinina = (constanteK * this.altura) / this.creatina;
    
  } 


  calculoCorrecao(){   
    
    this.correcaoMl =  Math.round(parseInt(this.correcaoMl) * 0.9)
    this.rediluicao = (((0.9 * this.dosagemMgKg * this.peso) / 50) - this.correcaoMl).toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  }
}
