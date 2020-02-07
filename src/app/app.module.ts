import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { Book } from './book/book.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { CreatebookComponent } from './book/createbook/createbook.component';
import{HttpClientModule} from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
const route:Routes=[
  {path:'',component:Book},
  {path:'createbook',component:CreatebookComponent},
{path:'displayall',component:Book}];
@NgModule({
  declarations: [
    AppComponent,
    Book,
    BookListComponent,
    CreatebookComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,Ng2SearchPipeModule,RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
