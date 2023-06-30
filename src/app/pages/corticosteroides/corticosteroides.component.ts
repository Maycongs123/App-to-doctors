import { Component } from '@angular/core';

@Component({
  selector: 'app-corticosteroides',
  templateUrl: './corticosteroides.component.html',
  styleUrls: ['./corticosteroides.component.scss']
})
export class CorticosteroidesComponent {
  backgroundColor: any = '#007bff'  

  corticosteroides :any = "Corticosteroides";
    
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
