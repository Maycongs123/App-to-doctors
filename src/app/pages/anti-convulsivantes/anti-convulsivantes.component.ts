import { Component } from '@angular/core';

@Component({
  selector: 'app-anti-convulsivantes',
  templateUrl: './anti-convulsivantes.component.html',
  styleUrls: ['./anti-convulsivantes.component.scss']
})
export class AntiConvulsivantesComponent {
  backgroundColor: any = '#6f42c1'  

  antiConvulsivantes:any = "Anti-Convulsivantes";
    
  medicacoes: any = [
  {
    tipo: "Anti-Convulsivantes",
    nome: "Carbamazepina",
    aplicacao: "VO"
  },
  {
    tipo: "Anti-Convulsivantes",
    nome: "Diazepam",
    aplicacao: "VO/IM/IV"
  },
  {
    tipo: "Anti-Convulsivantes",
    nome: "Fenítoina",
    aplicacao: "VO/IV"
  },
  {
    tipo: "Anti-Convulsivantes",
    nome: "Fenobarbital",
    aplicacao: "VO/IV"
  },
  {
    tipo: "Anti-Convulsivantes",
    nome: "Valproato de Sódio",
    aplicacao: "VO"
  }
  ]
}
