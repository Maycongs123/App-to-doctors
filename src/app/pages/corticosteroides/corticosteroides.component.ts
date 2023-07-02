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
      tipo: "Corticosteroides",
      nome: "Amicacina",
      aplicacao: "IM/V"
    },
    {
      tipo: "Corticosteroides",
      nome: "Amoxicilina",
      aplicacao: "VO"
    },
    {
      tipo: "Corticosteroides",
      nome: "Amoxicilina + Clavulanato",
      aplicacao: "VO"
    },
    {
      tipo: "Corticosteroides",
      nome: "Ampicilina",
      aplicacao: "IM/IV"
    },
    {
      tipo: "Corticosteroides",
      nome: "Azitromicina",
      aplicacao: "VO"
    }
  ]
}
