import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
   book:any[]=[];
  constructor(private http:HttpClient) {
   this.fetchdetails();
   }
  ngOnInint(){
  }
  
   fetchdetails(){
    console.log("inside fetchdetails");
    this.http.get("https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep").pipe(map(data=>{
      const bary=[];
      //console.log(data["items"]);
      data["items"].forEach(element => {
       bary.push(element["volumeInfo"]);
      });
return bary;
    }))
    .subscribe(responsedata=>{
      this.book=responsedata;
     
      console.log("inside subscibe");
    },error=>{
      console.log(error)
    })
  }
 

}
