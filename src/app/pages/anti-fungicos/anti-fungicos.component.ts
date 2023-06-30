import { Component } from '@angular/core';

@Component({
  selector: 'app-anti-fungicos',
  templateUrl: './anti-fungicos.component.html',
  styleUrls: ['./anti-fungicos.component.scss']
})
export class AntiFungicosComponent {
  backgroundColor: any = '#ffc107'  

  antiFungicos:any = "Anti-Fúngicos";
    
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
