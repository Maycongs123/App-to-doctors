import { Component } from '@angular/core';

@Component({
  selector: 'app-broncodilatadores',
  templateUrl: './broncodilatadores.component.html',
  styleUrls: ['./broncodilatadores.component.scss']
})
export class BroncodilatadoresComponent {
  backgroundColor: any = '#6f42c1'  

  broncodilatadores :any = "Broncodilatadores";
    
  medicacoes: any = [
    {
      tipo: "Broncodilatadores",
      nome: "Amicacina",
      aplicacao: "IM/V"
    },
    {
      tipo: "Broncodilatadores",
      nome: "Amoxicilina",
      aplicacao: "VO"
    },
    {
      tipo: "Broncodilatadores",
      nome: "Amoxicilina + Clavulanato",
      aplicacao: "VO"
    },
    {
      tipo: "Broncodilatadores",
      nome: "Ampicilina",
      aplicacao: "IM/IV"
    },
    {
      tipo: "Broncodilatadores",
      nome: "Azitromicina",
      aplicacao: "VO"
    }
  ]
}
