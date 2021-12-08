import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ClienteComponent } from './consumo/cliente/cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { IndiceComponent } from './indice/indice.component';
import { RegistroComponent } from './modules/autenticacion/registro/registro.component';
import { MuestraComponent } from './muestra/muestra.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    IndiceComponent,
    RegistroComponent,
    MuestraComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
