import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './consumo/cliente/cliente.component';
import { IndiceComponent } from './indice/indice.component';
import { EntrarComponent } from './usuario/entrar/entrar.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';
import { MuestraComponent } from './muestra/muestra.component';

const routes: Routes = [

  {
    path: '',
    component: RegistrarComponent
  },
  {
    path: 'login',
    component: EntrarComponent
  },
  {
    path: 'clientes',
    component: ClienteComponent
  },

  {
    path: 'home',
    component: IndiceComponent
  },
  {
    path: "**",
    redirectTo: ''
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
