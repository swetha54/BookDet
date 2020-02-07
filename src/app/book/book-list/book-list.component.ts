import { Component, OnInit,Input } from '@angular/core';
import{Book} from '../book.component';
import{HttpClient} from '@angular/common/http';
import{map} from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { BookService } from 'src/app/book.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers:[BookService]
})
export class BookListComponent implements OnInit {
 

  constructor(private http:HttpClient,private bs:BookService) { 
    
  }
  book=[];
  @Input('bsearch') search;


  ngOnInit() {
    this.book=this.bs.book;
   }
  

  
}
