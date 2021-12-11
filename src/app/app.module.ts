import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ClienteComponent } from './consumo/cliente/cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { IndiceComponent } from './indice/indice.component';
// import { RegistroComponent } from './modules/autenticacion/registro/registro.component';
import { MuestraComponent } from './muestra/muestra.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntrarComponent } from './usuario/entrar/entrar.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';
import { ItemsComponent } from './productos/items/items/items.component';
import { ItemComponent } from './productos/item/item/item.component';



@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    IndiceComponent,
    MuestraComponent,
    EntrarComponent,
    RegistrarComponent,
    ItemsComponent,
    ItemComponent,
  
  
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
