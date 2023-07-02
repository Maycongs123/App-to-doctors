import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaMedicamentosComponent } from 'src/app/components/lista-medicamentos/lista-medicamentos.component';

@Component({
  selector: 'app-anti-convulsivantes-calculos',
  templateUrl: './anti-convulsivantes-calculos.component.html',
  styleUrls: ['./anti-convulsivantes-calculos.component.scss']
})
export class AntiConvulsivantesCalculosComponent {
  @ViewChild(ListaMedicamentosComponent) listaMedicamentosComponent!: ListaMedicamentosComponent;

  backgroundColor: any = '#6f42c1';
  antiConvulsivantes:any = "Anti-Convulsivantes";
  nomeAntiConvulsivantes:any;
  dadosAntiConvulsivantes: any;
  nomeItem: any;
  
  constructor(private route: ActivatedRoute){
    this.nomeItem = this.route.snapshot.paramMap.get('nomeItem');
  }
  
    ngOnInit() {    
      this.nomeAntiConvulsivantes = this.nomeItem;
    
      this.receberDados(this.nomeAntiConvulsivantes);
    }
  
    receberDados(dados: any) {
      let nomeDados = dados;
      this.dadosAntiConvulsivantes = this.getMedicamentoByName(nomeDados);
    }
  
    getMedicamentoByName(nomeAntiConvulsivantes: any){
      let dadosFiltrados;
      dadosFiltrados =  this.listaAntiConvulsivantes.find((medicacao: any) => medicacao.nome === nomeAntiConvulsivantes);
      return dadosFiltrados;
    }
  
  listaAntiConvulsivantes: any = [
    {
      id: 1,
      nome: "Amicacina",
      tipo: "Anti-Convulsivantes",
      aplicacao: "IM/V",    
      indicacoesClinicas:[
        {
          indicacao: "Crianças",
          dose: "15mg/kg/dia"
        },
        {
          indicacao: "Neonatos(< 26 sem.)",
          dose: "7.5mg/kg/dia"
        },
        {
          indicacao: "Neonatos(27 a 34 sem.)",
          dose: "7.5mg/kg/dia"
        },
        {
          indicacao: "Neonatos(35 a 42 sem.)",
          dose: "10mg/kg/dia"       
        },
        {
          indicacao: "Neonatos(> 43 sem.)",
          dose: "10mg/kg/dia"       
        },
      ],
      apresentacaoDisponivel:[
        {
          medicacao: "Amicacina 100mg/2mL - " ,
          modoUso: "mL, em intervalos de 24/24 horas, por via IM ou IV. Rediluir em 100 mL de SF ou SG e infundir por 60 minutos.",        
        },
        {
          medicacao: "Amicacina 500mg/2mL -" ,
          modoUso: "mL, em intervalos de 24/24 horas, por via IM ou IV. Rediluir em 100 mL de SF ou SG e infundir por 60 minutos.",        
        }
      ],
      orientacoes:[
        {
          orieantacao: "Contra-indicado em pacientes com hipersensibilidade."
        },
        {
          orieantacao: "Atentar para o risco de nefrotoxicidade e ototoxicidade, principalmente em neonatos."
        },
        {
          orieantacao: "Os níveis séricos desejados são de 20 a 30 mg/mL, devendo ser dosados a partir do 9º dia de tratamento."
        },
        
      ]
    },
    {
      id: 2,
      nome: "Amoxicilina",
      tipo: "Anti-Convulsivantes",
      aplicacao: "VO",
      indicacoesClinicas:[
        {
          indicacao: "Faringoamigdalite",
          dose: "50mg/kg/dia"        
        },
        {
          indicacao: "Otite Média Aguda",
          dose: "90mg/kg/dia"      
        },
        {
          indicacao: "Rinossinusite",
          dose: "90mg/kg/dia"     
        },
        {
          indicacao: "Pneumonia (PAC)",
          dose: "90mg/kg/dia"      
        }
      ],
      apresentacaoDisponivel:[
        {
          medicacao: "Amoxicilina 250mg/5mL -" ,
          modoUso: "mL, em intervalos de 8/8 horas, durante 10 dias, por via oral.",
        },
        {
          medicacao: "Amoxicilina 400mg/5mL - " ,
          modoUso: "mL, em intervalos de 12/12 horas, durante 10 dias, por via oral.",
        },
        {
          medicacao: "Amoxicilina 500mg - " ,
          modoUso: "Esta apresentação não é uma boa indicação pelo sub-dose ou super-dose.",
        },
      ],
      orientacoes:[
        {
          orieantacao: "Contra-indicado em pacientes com hipersensibilidade."
        },
        {
          orieantacao: "Em infecções graves, a dose deve ser aumentada para 90 mg/kg/dia. (The Sanford Guide to Antimicrobial Therapy, 2018)"
        },
        {
          orieantacao: "Não deve ser utilizado como primeira escolha para tratamento de piodermites (resistência ao S. aureus)."
        },
        {
          orieantacao: "Em caso de rash, avaliar a possibilidade de mononucleose infecciosa, principal diagnóstico diferencial com a alergia medicamentosa."
        }
      ]
    },
    ]
}
