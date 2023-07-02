import { Component } from '@angular/core';

@Component({
  selector: 'app-anti-inflamatorio',
  templateUrl: './anti-inflamatorio.component.html',
  styleUrls: ['./anti-inflamatorio.component.scss']
})
export class AntiInflamatorioComponent {
  backgroundColor: any = '#dc3545'  

  antiInflamatorios:any = "Anti-Inflamatórios";
    
  medicacoes: any = [
    {
      tipo: "Anti-Inflamatórios",
      nome: "Amicacina",
      aplicacao: "IM/V"
    },
    {
      tipo: "Anti-Inflamatórios",
      nome: "Amoxicilina",
      aplicacao: "VO"
    },
    {
      tipo: "Anti-Inflamatórios",
      nome: "Amoxicilina + Clavulanato",
      aplicacao: "VO"
    },
    {
      tipo: "Anti-Inflamatórios",
      nome: "Ampicilina",
      aplicacao: "IM/IV"
    },
    {
      tipo: "Anti-Inflamatórios",
      nome: "Azitromicina",
      aplicacao: "VO"
    }
  ]
}
