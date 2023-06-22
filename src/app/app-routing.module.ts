import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AntibioticosComponent } from './pages/antibioticos/antibioticos.component';

const routes: Routes = [
  {path:"", component:HomeComponent}, 
  {path:"antibiotico", component:AntibioticosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
