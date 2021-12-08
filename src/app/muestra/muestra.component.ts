import { Component, OnInit, Input} from '@angular/core';
import { Cliente } from '../consumo/models/cliente.models';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-muestra',
  templateUrl: './muestra.component.html',
  styleUrls: ['./muestra.component.css']
})
export class MuestraComponent implements OnInit {


  @Input("dato") cliente: Cliente[]= [];

  constructor(private serviceCliente: ClienteService) { }

  ngOnInit(): void {

  }

  // traerClientes(){
  //   this.serviceCliente.traerClientes().subscribe((data: any)=>{
  //     this.cliente= data;
  //   })
  // }
  // guardarClientes(){
  //   this.serviceCliente.enviarCliente(this.dato).subscribe((data: any)=>{
      
  //   console.log(data)

  //   })
  // }

}
