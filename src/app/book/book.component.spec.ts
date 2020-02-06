import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Book } from './book.component';

describe('BookComponent', () => {
  let component: Book;
  let fixture: ComponentFixture<Book>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Book ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Book);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
