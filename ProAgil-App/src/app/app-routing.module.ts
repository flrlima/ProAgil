import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventoComponent } from './Evento/Evento.component';
import { ContatosComponent } from './contatos/contatos.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';


const routes: Routes = [
  {path: 'Evento', component: EventoComponent},
  {path: 'contatos', component: ContatosComponent},
  {path: 'dashboards', component: DashboardsComponent},
  {path: 'palestrantes', component: PalestrantesComponent},
  {path: '', redirectTo: 'dashboards', pathMatch: 'full'},
  {path: '**', redirectTo: 'dashboards', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
