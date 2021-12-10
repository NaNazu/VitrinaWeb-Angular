import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent implements OnInit {

  constructor(private clienteService :ClienteService) { }

  ngOnInit(): void {
    this.traerClientes
  }

  traerClientes(){
    this.clienteService.traerClientes().subscribe(clientes =>{
      console.log(clientes)
      })
  }

}
