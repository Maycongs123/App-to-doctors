import { Component } from '@angular/core';

@Component({
  selector: 'app-broncodilatadores',
  templateUrl: './broncodilatadores.component.html',
  styleUrls: ['./broncodilatadores.component.scss']
})
export class BroncodilatadoresComponent {
  backgroundColor: any = '#dc3545'  

  broncodilatadores :any = "Broncodilatadores";
    
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
