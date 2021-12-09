import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/consumo/models/cliente.models';
import { EventEmitter } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
  
  loginForm!: FormGroup;

  @Output() onNuevoCliente: EventEmitter<Cliente> = new EventEmitter();
  constructor(private fb:FormBuilder,clienteService: ClienteService) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username: [''],
      contraseña: [''],
    })
  }

  enviar(){
    console.log(this.loginForm.value)
    this.onNuevoCliente.emit(this.loginForm.value)
  }
  
  // entrar(){
    
  //   this.clienteService.entrar(this.loginForm.value).subscribe((data:any) =>{
  //     console.log(data);
  //     if(data.mensaje=="Accedió correctamente"){
  //      this.router.navigateByUrl('inicio')
  //     }else{
  //       alert(data.mensaje)
  //     }
  //   })
  // }
}
