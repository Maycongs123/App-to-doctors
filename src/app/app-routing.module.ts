import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AntibioticosComponent } from './pages/antibioticos/antibioticos.component';
import { AntiConvulsivantesComponent } from './pages/anti-convulsivantes/anti-convulsivantes.component';
import { AntiInflamatorioComponent } from './pages/anti-inflamatorio/anti-inflamatorio.component';
import { PesquisarComponent } from './pages/pesquisar/pesquisar.component';

const routes: Routes = [
  {path:"", component:HomeComponent}, 
  {path:"pesquisa", component:PesquisarComponent},
  {path:"lista-antibiotico", component:AntibioticosComponent},
  {path:"lista-anti-convulsivantes", component:AntiConvulsivantesComponent},
  {path:"lista-anti-inflamatorio", component:AntiInflamatorioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
