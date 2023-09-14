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

  ngOnInit(){   
    this.atendimento = localStorage.getItem('tipoAtendimento');
  }

  toggleImageDisplay(imageId: string, imageValue: number) {
    const imagem = document.getElementById(imageId);

    if (imagem) {
      this.isTransparent = imagem.style.opacity !== '0.3';
      imagem.style.opacity = this.isTransparent ? '0.3' : '1';

      if (this.isTransparent) {
        this.totalValue += imageValue;
      } else {
        this.totalValue -= imageValue;
      }
      
    } else {
      console.log('Imagem não encontrada.');
    }
  }

  toggleColor() {
    debugger
    this.isColored = !this.isColored;
  }

  calculateBody(){
    debugger
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
