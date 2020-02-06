import { Component, OnInit } from '@angular/core';
import {BookListComponent} from '../book-list/book-list.component';
import{Book} from '../book.component';
@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent implements OnInit {
b:Book[]=[];
  constructor() { }

  ngOnInit() {
  }
  addbooks()
  {
    
   alert();
    
  }

}
