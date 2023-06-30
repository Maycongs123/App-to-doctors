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
