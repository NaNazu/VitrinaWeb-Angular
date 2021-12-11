import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  url: string= environment.baseUrl

  constructor(private http: HttpClient) { }

  traerClientes(){
    return this.http.get('http://localhost:8080/api/usuarios');
  }

  enviarCliente(dato:any){
    return this.http.post('http://localhost:8080/api/usuarios',dato);
  }
}