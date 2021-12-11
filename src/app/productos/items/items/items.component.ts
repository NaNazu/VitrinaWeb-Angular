import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/consumo/models/item.models';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[]= [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        id: 0,
        producto: 'nom producto 1',
        precio: 10.000,
        cantidad: 10,
        completo: false
      },
      {
        id: 1,
        producto: 'nom producto 2',
        precio: 11.000,
        cantidad: 15,
        completo: true
      },  {
        id: 2,
        producto: 'nom producto 3',
        precio: 12.000,
        cantidad: 19,
        completo: false
      }, 
      {
        id: 3,
        producto: 'nom producto 4',
        precio: 15.000,
        cantidad: 20,
          completo: true
      },  {
        id: 4,
        producto: 'nom producto 5',
        precio: 17.000,
        cantidad: 70,
        completo: false
      },  {
        id: 5,
        producto: 'nom producto 6',
        precio: 18.000,
        cantidad: 18,
        completo: false
      },
    ]
  }
}
