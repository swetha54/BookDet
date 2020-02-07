import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers:[BookService]
})
export class Book implements OnInit {
 
   constructor(private bservice:BookService){
   
   }
  bookary:any[]=[];
  ngOnInit() {
    this.bookary=this.bservice.book;
  }
  navexpand(){
    var c=document.getElementById("content");
    console.log(c.margin.left);
  }
 

  
  

}
