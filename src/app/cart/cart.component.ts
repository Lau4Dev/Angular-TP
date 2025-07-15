import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../art-list/Article';
import { ArtCartService } from '../art-cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartList$: Observable<Article[]>;

  constructor(private cart: ArtCartService){
    this.cartList$ = cart.cartList2.asObservable();
  }
}
