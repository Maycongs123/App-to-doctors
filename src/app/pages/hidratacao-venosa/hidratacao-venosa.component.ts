import { Component } from '@angular/core';

@Component({
  selector: 'app-hidratacao-venosa',
  templateUrl: './hidratacao-venosa.component.html',
  styleUrls: ['./hidratacao-venosa.component.scss']
})
export class HidratacaoVenosaComponent {
  backgroundColor: any = '#ffc107'  

  hidratacaoVenosa :any = "Hidratação Venosa";
    
  medicacoes: any = [
    {
      tipo: "Hidratação Venosa",
      nome: "Amicacina",
      aplicacao: "IM/V"
    },
    {
      tipo: "Hidratação Venosa",
      nome: "Amoxicilina",
      aplicacao: "VO"
    },
    {
      tipo: "Hidratação Venosa",
      nome: "Amoxicilina + Clavulanato",
      aplicacao: "VO"
    },
    {
      tipo: "Hidratação Venosa",
      nome: "Ampicilina",
      aplicacao: "IM/IV"
    },
    {
      tipo: "Hidratação Venosa",
      nome: "Azitromicina",
      aplicacao: "VO"
    }
  ]
}
