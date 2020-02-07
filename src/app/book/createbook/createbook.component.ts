import { Component, OnInit } from '@angular/core';
import {BookListComponent} from '../book-list/book-list.component';
import{Book} from '../book.component';
import { NgForm } from '@angular/forms';
import { BookService } from 'src/app/book.service';
import { AddBook } from '../addBook';
@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent implements OnInit {
b:Book[]=[];
  constructor(private bservice:BookService) { }

  ngOnInit() {
  }
  adddetails(form:NgForm)
  {
    const value=form.value;
    
    console.log(value.title,value.authors,value.publisher,value.publishedDate);
     //const bobj=new AddBook(value.title,value.authors,value.publisher,value.publishedDate);
     this.bservice.additem(value.title,value.authors,value.publisher,value.publishedDate);
     console.log('added successfully');
  }

}
