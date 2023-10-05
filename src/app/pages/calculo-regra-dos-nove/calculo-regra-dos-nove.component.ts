import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo-regra-dos-nove',
  templateUrl: './calculo-regra-dos-nove.component.html',
  styleUrls: ['./calculo-regra-dos-nove.component.scss']
})
export class CalculoRegraDos9Component implements OnInit{
  isTransparent: boolean = false;
  isColored: boolean = false;
  totalValue = 0; 
  peso: any;
  formParkland: any;
  atendimento: any;
  idade: any;
  quantidadeMl: any;  


  valoresMl: any[] = [
    {value: 2, viewValue: '2ml'},
    {value: 3, viewValue: '3ml'},
    {value: 4, viewValue: '4ml'},
  ];

  idadeCrianca: any[] = [
    {value: 1, viewValue: 'Até 1 ano'},
    {value: 2, viewValue: '1 ano a 4 anos'},
    {value: 3, viewValue: '5 anos a 9 anos'},
    {value: 4, viewValue: '10 anos a 16 anos'},
  ];

  ngOnInit(){   
    this.atendimento = localStorage.getItem('tipoAtendimento');
  }

  toggleImageDisplay(imageId: string, imageValue: number) {  
    
    const imagem = document.getElementById(imageId);

    let valorAreaCorpo: any = imageValue;

    if(imageId === 'cabeça-frente-kid' || imageId === 'cabeça-costa-kid' ) valorAreaCorpo = this.calculoCabecaKids();
    if(imageId === 'quadricipes-direito-frente-kid' || imageId === 'quadricipes-esquerdo-frente-kid' || imageId === 'quadricipes-direito-costa-kid' || imageId === 'quadricipes-esquerdo-costa-kid' ) valorAreaCorpo = this.calculoQuadricipesKids();
    if(imageId === 'panturilha-direito-frente-kid' || imageId === 'panturilha-esquerdo-frente-kid' || imageId === 'panturilha-direito-costa-kid' || imageId === 'panturilha-esquerdo-costa-kid') valorAreaCorpo = this.calculoPanturilhaKids();

    if (imagem && this.atendimento === 'Adulto') {
      this.isTransparent = imagem.style.opacity !== '0.3';
      imagem.style.opacity = this.isTransparent ? '0.3' : '1';

      if (this.isTransparent) {
        this.totalValue += valorAreaCorpo;
      } else {
        this.totalValue -= valorAreaCorpo;
      }
      
    } else {
      console.log('Imagem não encontrada.');
    }

    if (imagem && this.idade && this.atendimento === 'Pediatrico') {
      this.isTransparent = imagem.style.opacity !== '0.3';
      imagem.style.opacity = this.isTransparent ? '0.3' : '1';

      if (this.isTransparent) {
        this.totalValue += valorAreaCorpo;
      } else {
        this.totalValue -= valorAreaCorpo;
      }
      
    } else {
      console.log('Imagem não encontrada.');
    }
  }


  onIdadeChange() {
    this.totalValue = 0;
    this.resetImagesToDefault();
  }

  resetImagesToDefault() {   
    const imagens = document.getElementsByClassName('coloring-image');  
    
    Array.from(imagens).forEach((imagem: any) => {
      imagem.style.opacity = '1';
    });  
    
    this.totalValue = 0;
  }

  calculoCabecaKids(){    
    let value = 0;
    
    if (this.idade === 1) {
      value = 9.5;      
    } else if (this.idade === 2) {
      value = 8.5;      
    } else if (this.idade === 3) {
      value = 6.5;      
    } else if (this.idade === 4) {
      value = 5.5;      
    }  

    return value;
  }

  calculoQuadricipesKids(){    
      let value = 0;

      if (this.idade === 1) {
        value = 2.75;       
      } else if (this.idade === 2) {
        value = 3.25;        
      } else if (this.idade === 3) {
        value = 4;        
      } else if (this.idade === 4) {
        value = 4.25;        
      }  

      return value;
    }
  

  
  calculoPanturilhaKids(){   
    let value = 0;

    if (this.idade === 1) {
      value = 2.5;      
    } else if (this.idade === 2) {
      value = 2.5;      
    } else if (this.idade === 3) {
      value = 2.75;      
    } else if (this.idade === 4) {
      value = 3;      
    }     

    return value;
  }  

  toggleColor() {   
    this.isColored = !this.isColored;
  }

  calculateBody(){    
    var pesoLimitado;
    if(this.idade <= 10){
      pesoLimitado = (this.idade * 2) + 8;

      this.formParkland = this.totalValue * pesoLimitado * this.quantidadeMl;

      return
    }
    
    this.formParkland = this.totalValue * this.peso * this.quantidadeMl;
  }

  back(){
    history.back()
  }

}
