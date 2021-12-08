import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ClienteComponent } from './consumo/cliente/cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { IndiceComponent } from './indice/indice.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    IndiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule//Módulo que se usa en el service
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
