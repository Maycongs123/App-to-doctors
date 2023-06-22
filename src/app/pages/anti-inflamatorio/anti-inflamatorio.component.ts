import { Component } from '@angular/core';

@Component({
  selector: 'app-anti-inflamatorio',
  templateUrl: './anti-inflamatorio.component.html',
  styleUrls: ['./anti-inflamatorio.component.scss']
})
export class AntiInflamatorioComponent {
  backgroundColor: any = '#dc3545'  

  antibiotico:any = "Anti-Inflamatórios";
    
  medicacoes: any = [
  {
    tipo: "Anti-Inflamatórios",
    nome: "Ácido Acetilsalicílico",
    aplicacao: "VO"
  },
  {
    tipo: "Anti-Inflamatórios",
    nome: "Cetoprofeno",
    aplicacao: "VO"
  },
  {
    tipo: "Anti-Inflamatórios",
    nome: "Diclofenaco",
    aplicacao: "VO/IM"
  },
  {
    tipo: "Anti-Inflamatórios",
    nome: "Ibuprofeno",
    aplicacao: "VO"
  },
  {
    tipo: "Anti-Inflamatórios",
    nome: "Naproxeno",
    aplicacao: "VO"
  }
  ]
}
