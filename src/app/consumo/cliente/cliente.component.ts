import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/consumo/models/cliente.models'
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente[]= [];

  constructor(private serviceCliente: ClienteService) { }

  ngOnInit(): void {
    this.traerClientes();
  }

  //Creamos un método para que ejecute el servicio

  traerClientes(){
    this.serviceCliente.traerClientes().subscribe((data: any)=>{
      this.cliente= data;
    })
  }

  
}

