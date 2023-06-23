import { Component } from '@angular/core';

@Component({
  selector: 'app-antibioticos-calculos',
  templateUrl: './antibioticos-calculos.component.html',
  styleUrls: ['./antibioticos-calculos.component.scss']
})
export class AntibioticosCalculosComponent {


listaAntibiotico: any = [
  {
    id: 1,
    nome: "Amicacina",
    aplicacao: "IM/V",
    apresentacaoDisponivel:[
      {
        amicacina: "Amicacina 100mg/2mL - 3 mL (2 ampolas), em intervalos de 24/24 horas, por via IM ou IV." ,
        admVI: "Rediluir em 100 mL de SF ou SG e infundir por 60 minutos."
      },
      {
        amicacina: "Amicacina 500mg/2mL - 0.6 mL, em intervalos de 24/24 horas, por via IM ou IV." ,
        admVI: "Rediluir em 100 mL de SF ou SG e infundir por 60 minutos."
      }
    ],
    
    
  },
  {
    id: 2,
    nome: "Amoxicilina",
    aplicacao: "VO"
  },
  {
    id: 3,
    nome: "Amoxicilina + Clavulanato",
    aplicacao: "VO"
  },
  {
    id: 4,
    nome: "Ampicilina",
    aplicacao: "IM/IV"
  },
  {
    id: 5,
    nome: "Azitromicina",
    aplicacao: "VO"
  }
  ]
}
