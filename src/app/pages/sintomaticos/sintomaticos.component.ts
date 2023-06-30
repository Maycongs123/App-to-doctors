import { Component } from '@angular/core';

@Component({
  selector: 'app-sintomaticos',
  templateUrl: './sintomaticos.component.html',
  styleUrls: ['./sintomaticos.component.scss']
})
export class SintomaticosComponent {
  backgroundColor: any = '#fd7e14'  

  sintomaticos :any = "Sintomaticos";
    
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
