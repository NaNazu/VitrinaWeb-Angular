import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { catchError, map, Observable, of, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl= environment.baseUrl;
  private usuario!: UsuarioService;

  get Usuario() {
    return this.usuario;
  }

  constructor(private http: HttpClient) { }
  get headers(){
    return {headers: {"Content-Type": "application/json"} }
  }

  entrar(dato: any){
    return this.http.post(`${this.baseUrl}/api/usuarios/login`,dato)
    .pipe(
      tap((data: any) => {
        if(data.mensaje=="Accedió correctamente"){
          localStorage.setItem("token", data.token)
          this.usuario=data
        }
      }),
      map(res=>res)
    )
  }

  getToken(){
    return localStorage.getItem("token") || '';
  }

  get headersToken(){
    return {headers: 
      {"Authorization": this.getToken()} }}
      verificarToken():Observable<boolean>{
        return this.http.get(`${this.baseUrl}/api/verificar`,this.headersToken)
        .pipe(
          map((res:any)=>{
            console.log(res)
              return res.ok
          }),
          catchError(err => of(false)) //Capture error ----> false
          )
      }
    }