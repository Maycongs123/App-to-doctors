import { Component } from '@angular/core';

@Component({
  selector: 'app-anti-parasitarios',
  templateUrl: './anti-parasitarios.component.html',
  styleUrls: ['./anti-parasitarios.component.scss']
})
export class AntiParasitariosComponent {
  backgroundColor: any = '#3bb54a'  

  antiParasitarios:any = "Anti-Parasitarios";
    
  medicacoes: any = [
    {
      tipo: "Anti-Parasitarios",
      nome: "Amicacina",
      aplicacao: "IM/V"
    },
    {
      tipo: "Anti-Parasitarios",
      nome: "Amoxicilina",
      aplicacao: "VO"
    },
    {
      tipo: "Anti-Parasitarios",
      nome: "Amoxicilina + Clavulanato",
      aplicacao: "VO"
    },
    {
      tipo: "Anti-Parasitarios",
      nome: "Ampicilina",
      aplicacao: "IM/IV"
    },
    {
      tipo: "Anti-Parasitarios",
      nome: "Azitromicina",
      aplicacao: "VO"
    }
  ]
}
