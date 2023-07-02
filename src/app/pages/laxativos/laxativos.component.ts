import { Component } from '@angular/core';

@Component({
  selector: 'app-laxativos',
  templateUrl: './laxativos.component.html',
  styleUrls: ['./laxativos.component.scss']
})
export class LaxativosComponent {
  backgroundColor: any = '#dc3545'  

  laxativos :any = "Laxativos";
    
  medicacoes: any = [
    {
      tipo: "Laxativos",
      nome: "Amicacina",
      aplicacao: "IM/V"
    },
    {
      tipo: "Laxativos",
      nome: "Amoxicilina",
      aplicacao: "VO"
    },
    {
      tipo: "Laxativos",
      nome: "Amoxicilina + Clavulanato",
      aplicacao: "VO"
    },
    {
      tipo: "Laxativos",
      nome: "Ampicilina",
      aplicacao: "IM/IV"
    },
    {
      tipo: "Laxativos",
      nome: "Azitromicina",
      aplicacao: "VO"
    }
  ]
}
