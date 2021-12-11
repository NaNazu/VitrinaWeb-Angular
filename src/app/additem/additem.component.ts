import { Component, OnInit } from '@angular/core';
import { Item } from '../consumo/models/item.models';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  id:number=0;
  producto:string='';
  precio:number=0;
  cantidad:number=0

  constructor(private itemService: ItemService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const item = new Item();
      item.id = this.id;
      item.producto = this.producto;
      item.precio = this.precio;
      item.cantidad = this.cantidad;
      item.completo = false;

      this. itemService.addItem(item);
      this.router.navigate(['/']);
  }

}
