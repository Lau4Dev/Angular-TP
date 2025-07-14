import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
  @Input()
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();


  upQuantity(quantity: number) : void{
    if(quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }
  
  downQuantity(quantity: number) : void{
    if(quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
}
