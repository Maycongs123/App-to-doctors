import { Component } from '@angular/core';

@Component({
  selector: 'app-sintomaticos',
  templateUrl: './sintomaticos.component.html',
  styleUrls: ['./sintomaticos.component.scss']
})
export class SintomaticosComponent {
  backgroundColor: any = '#fd7e14'  

  sintomaticos :any = "Sintomaticos";
    
  medicacoes: any = [
    {
      tipo: "Sintomaticos",
      nome: "Amicacina",
      aplicacao: "IM/V"
    },
    {
      tipo: "Sintomaticos",
      nome: "Amoxicilina",
      aplicacao: "VO"
    },
    {
      tipo: "Sintomaticos",
      nome: "Amoxicilina + Clavulanato",
      aplicacao: "VO"
    },
    {
      tipo: "Sintomaticos",
      nome: "Ampicilina",
      aplicacao: "IM/IV"
    },
    {
      tipo: "Sintomaticos",
      nome: "Azitromicina",
      aplicacao: "VO"
    }
  ]
}
