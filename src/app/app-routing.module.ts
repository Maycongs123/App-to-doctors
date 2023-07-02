import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AntibioticosComponent } from './pages/antibioticos/antibioticos.component';
import { AntiConvulsivantesComponent } from './pages/anti-convulsivantes/anti-convulsivantes.component';
import { AntiInflamatorioComponent } from './pages/anti-inflamatorio/anti-inflamatorio.component';
import { PesquisarComponent } from './pages/pesquisar/pesquisar.component';
import { AntibioticosCalculosComponent } from './pages/antibioticos-calculos/antibioticos-calculos.component';
import { AntiFungicosComponent } from './pages/anti-fungicos/anti-fungicos.component';
import { AntiHistaminicosComponent } from './pages/anti-histaminicos/anti-histaminicos.component';
import { BroncodilatadoresComponent } from './pages/broncodilatadores/broncodilatadores.component';
import { CorticosteroidesComponent } from './pages/corticosteroides/corticosteroides.component';
import { LaxativosComponent } from './pages/laxativos/laxativos.component';
import { SintomaticosComponent } from './pages/sintomaticos/sintomaticos.component';
import { HidratacaoVenosaComponent } from './pages/hidratacao-venosa/hidratacao-venosa.component';
import { AntiParasitariosCalculosComponent } from './pages/anti-parasitarios-calculos/anti-parasitarios-calculos.component';
import { AntiConvulsivantesCalculosComponent } from './pages/anti-convulsivantes-calculos/anti-convulsivantes-calculos.component';
import { AntiInflamatorioCalculosComponent } from './pages/anti-inflamatorio-calculos/anti-inflamatorio-calculos.component';
import { AntiFungicosCalculosComponent } from './pages/anti-fungicos-calculos/anti-fungicos-calculos.component';
import { AntiHistaminicosCalculosComponent } from './pages/anti-histaminicos-calculos/anti-histaminicos-calculos.component';
import { BroncodilatadoresCalculosComponent } from './pages/broncodilatadores-calculos/broncodilatadores-calculos.component';
import { CorticosteroidesCalculosComponent } from './pages/corticosteroides-calculos/corticosteroides-calculos.component';
import { LaxativosCalculosComponent } from './pages/laxativos-calculos/laxativos-calculos.component';
import { SintomaticosCalculosComponent } from './pages/sintomaticos-calculos/sintomaticos-calculos.component';
import { HidratacaoVenosaCalculosComponent } from './pages/hidratacao-venosa-calculos/hidratacao-venosa-calculos.component';

const routes: Routes = [
  {path:"", component:HomeComponent}, 
  {path:"pesquisa", component:PesquisarComponent},
  {path:"lista-antibiotico", component:AntibioticosComponent},
  {path:"lista-anti-convulsivantes", component:AntiConvulsivantesComponent},
  {path:"lista-anti-inflamatorio", component:AntiInflamatorioComponent},
  {path:"lista-anti-fungicos", component:AntiFungicosComponent},
  {path:"lista-anti-histamicos", component:AntiHistaminicosComponent},
  {path:"lista-anti-parasitarios", component:AntiHistaminicosComponent},
  {path:"lista-broncodilatadores", component:BroncodilatadoresComponent},
  {path:"lista-corticosteroides", component:CorticosteroidesComponent},
  {path:"lista-laxativos", component:LaxativosComponent},
  {path:"lista-sintomaticos", component:SintomaticosComponent},
  {path:"lista-hidratacao-venosa", component:HidratacaoVenosaComponent},
  {path:"antibioticos-calculos/:nomeItem", component:AntibioticosCalculosComponent},
  {path:"anti-convulsivantes-calculos/:nomeItem", component:AntiConvulsivantesCalculosComponent},
  {path:"anti-inflamatorio-calculos/:nomeItem", component:AntiInflamatorioCalculosComponent},
  {path:"anti-fungicos-calculos/:nomeItem", component:AntiFungicosCalculosComponent},
  {path:"anti-histamicos-calculos/:nomeItem", component:AntiHistaminicosCalculosComponent},
  {path:"anti-parasitario-calculos/:nomeItem", component:AntiParasitariosCalculosComponent},
  {path:"broncodilatadores-calculos/:nomeItem", component:BroncodilatadoresCalculosComponent},
  {path:"corticosteroides-calculos/:nomeItem", component:CorticosteroidesCalculosComponent},
  {path:"laxativos-calculos/:nomeItem", component:LaxativosCalculosComponent},
  {path:"sintomaticos-calculos/:nomeItem", component:SintomaticosCalculosComponent},
  {path:"hidratacao-venosa-calculos/:nomeItem", component:HidratacaoVenosaCalculosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
