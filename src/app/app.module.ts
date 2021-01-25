import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContratanteGestionComponent } from './pages/contratante-gestion/contratante-gestion.component';
import { ContratantesGestionComponent } from './pages/contratantes-gestion/contratantes-gestion.component';

@NgModule({
  declarations: [
    AppComponent,
    ContratanteGestionComponent,
    ContratantesGestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
