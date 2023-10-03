import { Component } from '@angular/core';

@Component({
  selector: 'app-folha-de-parada',
  templateUrl: './folha-de-parada.component.html',
  styleUrls: ['./folha-de-parada.component.scss']
})
export class FolhaDeParadaComponent {
  bolsaValvaRessuscitacao = [
    {value: 1, label: "Lactente"},
    {value: 2, label: "Lactente/criança"},
    {value: 3, label: "Lactente/criança"},
    {value: 4, label: "Criança"},
    {value: 5, label: "Criança"},
    {value: 6, label: "Criança"},
    {value: 7, label: "Criança"},
    {value: 8, label: "Criança/adulto"},
    {value: 9, label: "Adulto"}
  ];

  mascaraO2 = [
    {value: 1, label: "Neonatal"},
    {value: 2, label: "Neonatal"},
    {value: 3, label: "Neonatal"},
    {value: 4, label: "Pediátrica"},
    {value: 5, label: "Pediátrica"},
    {value: 6, label: "Pediátrica"},
    {value: 7, label: "Pediátrica"},
    {value: 8, label: "Adulto"},
    {value: 9, label: "Adulto"}
  ];


  canulaOroFaringea = [
    {value: 1, label: "0"},
    {value: 2, label: "0-1"},
    {value: 3, label: "1"},
    {value: 4, label: "1"},
    {value: 5, label: "1-2"},
    {value: 6, label: "2"},
    {value: 7, label: "2"},
    {value: 8, label: "2-3"},
    {value: 9, label: "3 ou +"}
  ];

  laminaLaringoscopio = [
    {value: 1, label: "Reta 0-1"},
    {value: 2, label: "Reta 1"},
    {value: 3, label: "Reta 1"},
    {value: 4, label: "Reta 1"},
    {value: 5, label: "Reta 2"},
    {value: 6, label: "Reta 2"},
    {value: 7, label: "Reta 2 ou curva"},
    {value: 8, label: "Reta 2-3 ou curva"},
    {value: 9, label: "Reta 3 ou curva"}
  ];

  canulaTraqueal = [
    {value: 1, label: "Prematuro 2,5 Termo 3,0 - 3,5 sem cuff"},
    {value: 2, label: "3,5 sem cuff - 3,0 com cuff"},
    {value: 3, label: "3,5 sem cuff - 3,0 com cuff"},
    {value: 4, label: "4,0 sem cuff - 3,5 com cuff"},
    {value: 5, label: "4,5 sem cuff - 4,0 com cuff"},
    {value: 6, label: "5,0 sem cuff - 4,5 com cuff"},
    {value: 7, label: "5,5 sem cuff - 5,0 com cuff"},
    {value: 8, label: "6,0 com cuff"},
    {value: 9, label: "6,5 com cuff"}
  ];

  comprimentoCanulaTraqueal = [
    {value: 1, label: "3kg: 9-9,5 / 4kg: 9,5-10 / 5kg: 10-10,5"},
    {value: 2, label: "10,5 - 11"},
    {value: 3, label: "10,5 - 11"},
    {value: 4, label: "11 - 12"},
    {value: 5, label: "12,5 - 13,5"},
    {value: 6, label: "14 - 15"},
    {value: 7, label: "15,5 - 16,5"},
    {value: 8, label: "17 - 18"},
    {value: 9, label: "18,5 - 19,5"}
  ];

  fioGuia = [
    {value: 1, label: "6"},
    {value: 2, label: "6"},
    {value: 3, label: "6"},
    {value: 4, label: "6"},
    {value: 5, label: "6"},
    {value: 6, label: "6"},
    {value: 7, label: "14"},
    {value: 8, label: "14"},
    {value: 9, label: "14"}
  ];

  sondaAspiracao = [
    {value: 1, label: "6 - 8"},
    {value: 2, label: "6 - 8"},
    {value: 3, label: "8"},
    {value: 4, label: "8 - 10"},
    {value: 5, label: "10"},
    {value: 6, label: "10"},
    {value: 7, label: "10"},
    {value: 8, label: "10"},
    {value: 9, label: "12"}
  ];

  manguitoPA = [
    {value: 1, label: "Neonato/lactente"},
    {value: 2, label: "Neonato/lactente"},
    {value: 3, label: "Neonato/lactente"},
    {value: 4, label: "Lactente/criança"},
    {value: 5, label: "Criança"},
    {value: 6, label: "Criança"},
    {value: 7, label: "Criança"},
    {value: 8, label: "Criança"},
    {value: 9, label: "Pequeno adulto"}
  ];

  cateterEV = [
    {value: 1, label: "22 - 24"},
    {value: 2, label: "22 - 24"},
    {value: 3, label: "22 - 24"},
    {value: 4, label: "20 - 24"},
    {value: 5, label: "18 - 22"},
    {value: 6, label: "18 - 22"},
    {value: 7, label: "18 - 20"},
    {value: 8, label: "18 - 20"},
    {value: 9, label: "16 - 20"}
  ];

  intraOssea = [
    {value: 1, label: "18/15"},
    {value: 2, label: "18/15"},
    {value: 3, label: "18/15"},
    {value: 4, label: "15"},
    {value: 5, label: "15"},
    {value: 6, label: "15"},
    {value: 7, label: "15"},
    {value: 8, label: "15"},
    {value: 9, label: "15"}
  ];

  sondaNasogastrica = [
    {value: 1, label: "5 - 8"},
    {value: 2, label: "5 - 8"},
    {value: 3, label: "5 - 8"},
    {value: 4, label: "8 - 10"},
    {value: 5, label: "10"},
    {value: 6, label: "10"},
    {value: 7, label: "12 - 14"},
    {value: 8, label: "14 - 18"},
    {value: 9, label: "16 - 18"}
  ];

  sondaUrinaria = [
    {value: 1, label: "5"},
    {value: 2, label: "5 - 8"},
    {value: 3, label: "5 - 8"},
    {value: 4, label: "8 - 10"},
    {value: 5, label: "10"},
    {value: 6, label: "10"},
    {value: 7, label: "12 - 14"},
    {value: 8, label: "14 - 18"},
    {value: 9, label: "16 - 18"}
  ];

  pasDesfibrilacao = [
    {value: 1, label: "Pás de lactente <1 ano"},
    {value: 2, label: "Pás de lactente <1 ano"},
    {value: 3, label: "Pás de lactente <1 ano ou 10kg"},
    {value: 4, label: "Pás de lactente >= 1 ano ou >= 10kg"},
    {value: 5, label: "Pás de adulto"},
    {value: 6, label: "Pás de adulto"},
    {value: 7, label: "Pás de adulto"},
    {value: 8, label: "Pás de adulto"},
    {value: 9, label: "Pás de adulto"}
  ];

  drenoToracico = [
    {value: 1, label: "10"},
    {value: 2, label: "10 - 12"},
    {value: 3, label: "10 - 12"},
    {value: 4, label: "16 - 20"},
    {value: 5, label: "20 - 24"},
    {value: 6, label: "20 - 24"},
    {value: 7, label: "24 - 32"},
    {value: 8, label: "28 - 32"},
    {value: 9, label: "32 - 38"}
  ];

  mascaraLaringea = [
    {value: 1, label: "1"},
    {value: 2, label: "1 - 1,5"},
    {value: 3, label: "1,5"},
    {value: 4, label: "1,5"},
    {value: 5, label: "2"},
    {value: 6, label: "2"},
    {value: 7, label: "2 - 2,5"},
    {value: 8, label: "2,5"},
    {value: 9, label: "3"}
  ];
}
