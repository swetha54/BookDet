import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import $ from "Jquery";

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
  

  
  
  
  

}
