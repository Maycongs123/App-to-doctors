import { Component, HostListener, ElementRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PesquisarComponent {

  allItens: any = [
    { title: "Acebrofilina", tag: "em Broncodilatadores" },
    { title: "Acebrofilina", tag: "em Broncodilatadores" },
    { title: "Acebrofilina", tag: "em Broncodilatadores" },
    { title: "Acebrofilina", tag: "em Broncodilatadores" },
    { title: "Acebrofilina", tag: "em Broncodilatadores" },
    { title: "Acebrofilina", tag: "em Broncodilatadores" },
    { title: "Acebrofilina", tag: "em Broncodilatadores" },
    { title: "Acebrofilina", tag: "em Broncodilatadores" },
    { title: "Acebrofilina", tag: "em Broncodilatadores" },
    { title: "Acebrofilina", tag: "em Broncodilatadores" },
    { title: "Acebrofilina", tag: "em Broncodilatadores" },
  ]

}
