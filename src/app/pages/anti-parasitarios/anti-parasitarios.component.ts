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
