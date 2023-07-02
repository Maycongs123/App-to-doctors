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
      tipo: "Anti-Fúngicos",
      nome: "Amicacina",
      aplicacao: "IM/V"
    },
    {
      tipo: "Anti-Fúngicos",
      nome: "Amoxicilina",
      aplicacao: "VO"
    },
    {
      tipo: "Anti-Fúngicos",
      nome: "Amoxicilina + Clavulanato",
      aplicacao: "VO"
    },
    {
      tipo: "Anti-Fúngicos",
      nome: "Ampicilina",
      aplicacao: "IM/IV"
    },
    {
      tipo: "Anti-Fúngicos",
      nome: "Azitromicina",
      aplicacao: "VO"
    }
  ]
}
