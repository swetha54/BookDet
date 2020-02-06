import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class Book implements OnInit {
// bookname:string;
// author:string;
// publisher:string;
// publisheddate:string;
  // constructor( bname:string, author:string,publisher:string,pdate:string) {
  //   this.bookname=bname;
  //   this.author=author;
  //   this.publisher=publisher;
  //   this.publisheddate=pdate;

  //  }
  bookary:any[]=[];
  booksearch:any;
  constructor(private bservice:BookService){}

  ngOnInit() {
    this.bookary=this.bservice.book;
  }
  

}
