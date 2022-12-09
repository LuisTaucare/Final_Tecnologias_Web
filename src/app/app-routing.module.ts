import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgresoComponent } from './componentes/egreso/egreso.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { VerEgresoComponent } from './componentes/ver-egreso/ver-egreso.component';
import { VerUsuarioComponent } from './componentes/ver-usuario/ver-usuario.component';

const routes: Routes = [
  {
    path:'usuario',
    component:UsuarioComponent
  },
  {
    path:'egreso',
    component:EgresoComponent
  },
  {
    path:'ver_usuario',
    component:VerUsuarioComponent
  },
  {
    path:'ver_egreso',
    component:VerEgresoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
