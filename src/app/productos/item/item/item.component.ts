import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/consumo/models/item.models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item();
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(item: Item){ 
    this.deleteItem.emit(item);                    
  }

  onToggle(item: Item){
    item.completo = ! item.completo;
    this.toggleItem.emit(item);
  }

}
