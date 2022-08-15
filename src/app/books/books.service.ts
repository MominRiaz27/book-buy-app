import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) { }
  private url ="https://api.itbook.store/1.0/search/mongodb"
  arrayobj : any = [];
  getbooks(){
    return this.httpClient.get(this.url);  
    // return [{
    //   name : "Practical Mongodb",
    //   author: "Shankuntala Gupta",
    //   image : "https://itbook.store/img/books/9781484206485.png",
    //   price: 200
    // },
    // {
    //   name : "Practical Mongodb",
    //   author: "Shankuntala Gupta",
    //   image : "https://itbook.store/img/books/9781484206485.png",
    //   price: 300
    // },
    // {
    //   name : "Practical Mongodb",
    //   author: "Shankuntala Gupta",
    //   image : "https://itbook.store/img/books/9781484206485.png",
    //   price: 300
    // },
    // {
    //   name : "Practical Mongodb",
    //   author: "Shankuntala Gupta",
    //   image : "https://itbook.store/img/books/9781484206485.png",
    //   price: 300
    // },
    // {
    //   name : "Practical Mongodb",
    //   author: "Shankuntala Gupta",
    //   image : "https://itbook.store/img/books/9781484206485.png",
    //   price: 300
    // },]
  }
}
