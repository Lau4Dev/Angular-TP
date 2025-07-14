import { Injectable } from '@angular/core';
import { Article } from './art-list/Article';

@Injectable({
  providedIn: 'root'
})

export class ArtCartService {
  cartList: Article[] = [];
  constructor() { }

  addToCart(article: Article): void{
    let item: Article | undefined = this.cartList.find((v1) => v1.name === article.name);
    if(!item){
      this.cartList.push({... article});
    }
    else{
      item.quantity += article.quantity;
    }
    console.log(this.cartList);
  }
}
