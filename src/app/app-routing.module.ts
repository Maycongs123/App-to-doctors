import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AntibioticosComponent } from './pages/antibioticos/antibioticos.component';
import { AntiConvulsivantesComponent } from './pages/anti-convulsivantes/anti-convulsivantes.component';
import { AntiInflamatorioComponent } from './pages/anti-inflamatorio/anti-inflamatorio.component';
import { PesquisarComponent } from './pages/pesquisar/pesquisar.component';

import { AntiFungicosComponent } from './pages/anti-fungicos/anti-fungicos.component';
import { AntiHistaminicosComponent } from './pages/anti-histaminicos/anti-histaminicos.component';
import { BroncodilatadoresComponent } from './pages/broncodilatadores/broncodilatadores.component';
import { CorticosteroidesComponent } from './pages/corticosteroides/corticosteroides.component';
import { LaxativosComponent } from './pages/laxativos/laxativos.component';
import { SintomaticosComponent } from './pages/sintomaticos/sintomaticos.component';
import { HidratacaoVenosaComponent } from './pages/hidratacao-venosa/hidratacao-venosa.component';

import { CalculoMedicamentosComponent } from './components/calculo-medicamentos/calculo-medicamentos.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { OutrosMedicamentosComponent } from './pages/outros-medicamentos/outros-medicamentos.component';
import { CalculoRegraDos9Component } from './pages/calculo-regra-dos-nove/calculo-regra-dos-nove.component';
import { FolhaDeParadaComponent } from './pages/folha-de-parada/folha-de-parada.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"pesquisa", component:PesquisarComponent},
  {path:"folha-parada", component:FolhaDeParadaComponent},
  {path:"lista-antibiotico", component:AntibioticosComponent},
  {path:"lista-anti-convulsivantes", component:AntiConvulsivantesComponent},
  {path:"lista-anti-inflamatorio", component:AntiInflamatorioComponent},
  {path:"lista-anti-fungicos", component:AntiFungicosComponent},
  {path:"lista-anti-histamicos", component:AntiHistaminicosComponent},
  {path:"lista-anti-parasitarios", component:AntiHistaminicosComponent},
  {path:"lista-broncodilatadores", component:BroncodilatadoresComponent},
  {path:"lista-corticosteroides", component:CorticosteroidesComponent},
  {path:"lista-laxativos", component:LaxativosComponent},
  {path:"regra-dos-nove", component:CalculoRegraDos9Component},
  {path:"lista-sintomaticos", component:SintomaticosComponent},
  {path:"lista-hidratacao-venosa", component:HidratacaoVenosaComponent},
  {path:"lista-outros", component:OutrosMedicamentosComponent},
  {path:"calculos/:medicamento/:backgroundColor", component: CalculoMedicamentosComponent},
  {path:"adm", component: AdministradorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
