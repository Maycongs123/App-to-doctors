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
        nome: "Amicacina",
        aplicacao: "IM/V"
      },
      {
        tipo: "Anti-Convulsivantes",
        nome: "Amoxicilina",
        aplicacao: "VO"
      },
      {
        tipo: "Anti-Convulsivantes",
        nome: "Amoxicilina + Clavulanato",
        aplicacao: "VO"
      },
      {
        tipo: "Anti-Convulsivantes",
        nome: "Ampicilina",
        aplicacao: "IM/IV"
      },
      {
        tipo: "Anti-Convulsivantes",
        nome: "Azitromicina",
        aplicacao: "VO"
      }
  ]
}
