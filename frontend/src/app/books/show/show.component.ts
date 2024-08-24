import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit {
  book: any;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.bookService.getBook(id).subscribe(data => {
      this.book = data;
    });
  }

  formatMoney(amount: number): string {
    return `$${amount.toFixed(2)}`;
  }

  addToCart(book: any): void {
    console.log('Book added to cart:', book);
  }

}
