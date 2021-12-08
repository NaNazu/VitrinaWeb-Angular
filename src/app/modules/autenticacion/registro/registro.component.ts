import { Component, OnInit, Input} from '@angular/core';
import { Cliente } from 'src/app/consumo/models/cliente.models';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @Input("dato") cliente: Cliente[]= [];

  constructor() {}

  ngOnInit(): void {
  }



  
}
