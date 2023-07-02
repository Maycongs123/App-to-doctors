import { Component } from '@angular/core';

@Component({
  selector: 'app-antibioticos',
  templateUrl: './antibioticos.component.html',
  styleUrls: ['./antibioticos.component.scss']
})
export class AntibioticosComponent {
backgroundColor: any = '#007bff'  

antibiotico:any = "Antibiótico";
  
medicacoes: any = [
{
  tipo: "Antibiótico",
  nome: "Amicacina",
  aplicacao: "IM/V"
},
{
  tipo: "Antibiótico",
  nome: "Amoxicilina",
  aplicacao: "VO"
},
{
  tipo: "Antibiótico",
  nome: "Amoxicilina + Clavulanato",
  aplicacao: "VO"
},
{
  tipo: "Antibiótico",
  nome: "Ampicilina",
  aplicacao: "IM/IV"
},
{
  tipo: "Antibiótico",
  nome: "Azitromicina",
  aplicacao: "VO"
}
]

}
