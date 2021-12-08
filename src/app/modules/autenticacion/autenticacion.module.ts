import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { EntrarComponent } from './entrar/entrar.component';


@NgModule({
  declarations: [
    RegistroComponent,
    EntrarComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule
  ]
})
export class AutenticacionModule { }
