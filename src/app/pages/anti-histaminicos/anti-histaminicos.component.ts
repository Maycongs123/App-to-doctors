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
    tipo: "Antibiótico",
    nome: "Amicacina",
    aplicacao: "IM/V"
  },
  {
    tipo: "Antibiótico",
    nome: "Amoxicilina",
    aplicacao: "VO"
  },
  {
    tipo: "Antibiótico",
    nome: "Amoxicilina + Clavulanato",
    aplicacao: "VO"
  },
  {
    tipo: "Antibiótico",
    nome: "Ampicilina",
    aplicacao: "IM/IV"
  },
  {
    tipo: "Antibiótico",
    nome: "Azitromicina",
    aplicacao: "VO"
  }
  ]
}
