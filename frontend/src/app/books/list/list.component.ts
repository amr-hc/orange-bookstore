import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router , RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements  OnInit {
  books: any[] = [];

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data; 
    });
  }


  deleteBook(id: number): void {
    if (confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(id).subscribe(() => {
        this.loadBooks();
      });
    }
  }

  addBook(): void {
    this.router.navigate(['books/create']);
  }
}
