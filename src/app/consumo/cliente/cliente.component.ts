import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/consumo/models/cliente.models'
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  dato = {
    "id": "",
    "nombre":"Gabriel",
    "username":"lolo32",
    "correo": "gg2",
    "contraseña": "23",
    "hash": ""
  }
 cliente: Cliente[]= [];

  constructor(private serviceCliente: ClienteService) { }

  ngOnInit(): void {
    this.traerClientes();
    // this.guardarClientes()
  }

  traerClientes(){
    this.serviceCliente.traerClientes().subscribe((data: any)=>{
      this.cliente= data;
    
    })
    }
    guardar(dato:Cliente){
      this.serviceCliente.enviarCliente(this.dato).subscribe((data:any)=> {
        console.log(data)
      })
    }
  }

  
  

 


