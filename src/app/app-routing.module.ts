import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratanteGestionComponent } from './pages/contratante-gestion/contratante-gestion.component';
import { ContratantesGestionComponent } from './pages/contratantes-gestion/contratantes-gestion.component';

const routes : Routes = [
  { path: 'contratantesGestion', component: ContratantesGestionComponent },
  { path: 'contratanteGestion/:id', component: ContratanteGestionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'contratantesGestion'  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
