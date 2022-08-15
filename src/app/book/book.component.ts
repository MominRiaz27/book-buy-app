import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book : Book = {} as Book ;
  @Input() i = 0;

  @Output() emitbook = new EventEmitter<Book>() 

  constructor(private cartservice: CartService) { }

  isincart:boolean=false;

  ngOnInit(): void {
  }

  addtocart(){
    this.isincart=true;
    this.cartservice.add(this.book);
    //this.emitbook.emit(this.book);
  }

  
  removefromcart(){
    this.isincart=false;
    this.cartservice.remove(this.book);
    //this.emitbook.emit(this.book);
  }
}
