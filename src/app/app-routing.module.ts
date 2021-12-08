import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './consumo/cliente/cliente.component';
import { IndiceComponent } from './indice/indice.component';
import { EntrarComponent } from './modules/autenticacion/entrar/entrar.component';
import { RegistroComponent } from './modules/autenticacion/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: RegistroComponent
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
    path: 'login',
    component: EntrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
