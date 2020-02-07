export class AddBook {
  
    title:string;
    authors:string;
    publisher:string;
    publishedDate:string;
      constructor( title:string, authors:string,publisher:string,pdate:string) {
        this.title=title;
       this.authors=authors;
        this.publisher=publisher;
        this.publishedDate=pdate;
   
       }
}