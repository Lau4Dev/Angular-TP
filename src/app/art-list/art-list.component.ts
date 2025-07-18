import { Component } from '@angular/core';
import { Article } from './Article';
import { ArtCartService } from '../art-cart.service';

@Component({
  selector: 'app-art-list',
  standalone: false,
  templateUrl: './art-list.component.html',
  styleUrl: './art-list.component.scss'
})
export class ArtListComponent {
  articles: Article []= [
    {
    name : 'sommier 2 plazas',
    price : 200,
    type : 'inmueble',
    stock : 4,
    image : "sommier.jpeg",
    clearance : false,
    quantity: 0,
  },
  {
    name : 'heladera',
    price : 50,
    type : 'electrodomestico',
    stock : 1,
    image : "sommier.jpeg",
    clearance : false,
    quantity: 0,
  },
  {
    name : 'sommier 1 plaza',
    price : 300,
    type : 'inmueble',
    stock : 1,
    image : "cama.jpg",
    clearance : true,
    quantity: 0,
  },
  {
    name : 'colchon',
    price : 20,
    type : 'inmueble',
    stock : 0,
    image : "cama.jpg",
    clearance : false,
    quantity: 0,
  },
  ]

  constructor(private cart: ArtCartService){
  }

  addToCart(article: Article): void{
    this.cart.addToCart(article);
    article.stock -= article.quantity;
    article.quantity = 0;
  }
}
