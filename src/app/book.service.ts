import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
   public book:any[]=[];
  constructor(private http:HttpClient) {
  this.fetchdetails();
   }
   public entirebook=this.book;

  ngOnInint(){
  
  }
  
   fetchdetails(){
    // console.log("inside fetchdetails");
    this.http.get("https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep").pipe(map(data=>{
      const bary=[];
      //console.log(data["items"]);
      data["items"].forEach(element => {
       this.book.push(element["volumeInfo"]);
       //this.entirebook.push(element["volumeInfo"].title,element["volumeInfo"].authors,element["volumeInfo"].publisher,element["volumeInfo"].publishedDate);
      });
return this.book;
    }))
    .subscribe(responsedata=>{
      // console.log("inside subscibe");
      //console.log(responsedata);
    },error=>{
      console.log(error);
    })
  }
  
 public title;
 public authors;
 public publisher;
 public publishedDate;
  additem(title:string,authors:string,publisher:string,publishedDate:string){
    this.title=title;
    this.authors=authors;
    this.publishedDate=publishedDate;
    this.publisher=publisher;
    //console.log(this.entirebook);
  this.entirebook.push({title,authors,publisher,publishedDate});
  console.log(this.entirebook);
  alert("added Successfully to the service!");  
   }
}

