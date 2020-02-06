import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{ map } from 'rxjs/operators';
import { BookService } from './book.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadeddata=[];
  constructor(private b:BookService){}
  ngOnInit() {
    // this.b.fetchdetails();
    
  }

}
