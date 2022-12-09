import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { EgresoComponent } from './componentes/egreso/egreso.component';
import { VerUsuarioComponent } from './componentes/ver-usuario/ver-usuario.component';
import { VerEgresoComponent } from './componentes/ver-egreso/ver-egreso.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    EgresoComponent,
    VerUsuarioComponent,
    VerEgresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
