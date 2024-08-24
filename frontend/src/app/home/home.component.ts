import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../services/book.service'; // Adjust the path as necessary
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: any) => {
      this.books = data;
    });
  }

  formatMoney(amount: number): string {
    return `$${amount.toFixed(2)}`; // Adjust for your currency format
  }

  addToCard(book: any): void {
    // Logic to add the book to the user's list
  }

  haveBook(book: any): number {
    // Logic to check if the book is already in the user's list
    // Return -1 if not present, otherwise return index or another identifier
    return -1; // Example logic
  }

}
