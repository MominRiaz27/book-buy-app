import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit , OnDestroy{

  cart : Book[] = [];

  constructor() { }
  ngOnInit(): void {
  this.cart = JSON.parse(localStorage.getItem("my_cart")!); 
  }
  ngOnDestroy(): void {
  localStorage.setItem("my_cart", JSON.stringify(this.cart)); 
  }

  add( book:Book){
    console.log(book)
    this.cart.push(book);
  }

  remove( book:Book){
    console.log(book)
    this.cart = this.cart.filter((b) => b != book);
  }

  get(){
    return this.cart;
  }
  
}
