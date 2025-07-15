import { Injectable } from '@angular/core';
import { Article } from './art-list/Article';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ArtCartService {
  private cartList: Article[] = [];

  cartList2: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  constructor() { }

  addToCart(article: Article): void{
    let item: Article | undefined = this.cartList.find((v1) => v1.name === article.name);
    if(!item){
      this.cartList.push({... article});
    }
    else{
      item.quantity += article.quantity;
    }
    this.cartList2.next(this.cartList);
  }
}
