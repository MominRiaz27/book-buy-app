import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


 
export class BooksComponent implements OnInit {

  constructor(private bookservice : BooksService) { }

  // isdisabled :boolean = false;
  // inputdata : String = "";
  books : Book[] = []
  isshowing : boolean = true;
  
  cart :Book[]=[];


  ngOnInit(): void {
   this.bookservice.getbooks().subscribe((data:any) => {
     this.books = data.books;
     console.log(this.books)
  });
  console.log("123")
  }

  // handleshow(){
  //   this.isshowing = !this.isshowing;
  // }
  
  addtocartnow(book: Book){
    console.log(book)
  }

}
