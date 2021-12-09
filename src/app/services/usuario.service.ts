import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl= environment.baseUrl;

  constructor(private http: HttpClient) { }

  entrar(dato: any){
    return this.http.post(`${this.baseUrl}/api/usuarios/login`,dato);
  }
}
