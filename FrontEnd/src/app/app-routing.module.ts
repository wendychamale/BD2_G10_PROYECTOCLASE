import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {RegistroComponent} from'./Components/registro/registro.component'
import {LoginComponent} from './Components/login/login.component'
import {PrincipalComponent} from './Components/principal/principal.component'
import { GraficoRankingComponent } from './Components/grafico-ranking/grafico-ranking.component';
import { TablaRankingComponent } from './Components/tabla-ranking/tabla-ranking.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'tabla-ranking', component: TablaRankingComponent },
  { path: 'grafico-ranking', component: GraficoRankingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
