import { Component } from '@angular/core';

@Component({
  selector: 'app-anti-histaminicos',
  templateUrl: './anti-histaminicos.component.html',
  styleUrls: ['./anti-histaminicos.component.scss']
})
export class AntiHistaminicosComponent {
  backgroundColor: any = '#28a745'  

  antiHistaminicos:any = "Anti-Histaminicos";
    
  medicacoes: any = [
    {
      tipo: "Anti-Histaminicos",
      nome: "Amicacina",
      aplicacao: "IM/V"
    },
    {
      tipo: "Anti-Histaminicos",
      nome: "Amoxicilina",
      aplicacao: "VO"
    },
    {
      tipo: "Anti-Histaminicos",
      nome: "Amoxicilina + Clavulanato",
      aplicacao: "VO"
    },
    {
      tipo: "Anti-Histaminicos",
      nome: "Ampicilina",
      aplicacao: "IM/IV"
    },
    {
      tipo: "Anti-Histaminicos",
      nome: "Azitromicina",
      aplicacao: "VO"
    }
  ]
}
