import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { AuthorService, Author } from '../../services/author.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  bookForm: FormGroup;
  authors: Author[] = [];
  bookId!: number;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private authorService: AuthorService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      author_id: ['', Validators.required],
      pages: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(0)]],
      photo: ['']
    });
  }

  ngOnInit(): void {
    this.bookId = +this.route.snapshot.paramMap.get('id')!;
    this.bookService.getBook(this.bookId).subscribe(book => {
      this.bookForm.patchValue(book);
    });

    this.authorService.getAuthors(1,100).subscribe(authors => {
      this.authors = authors.rows;
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      this.bookService.updateBook(this.bookId, this.bookForm.value).subscribe(() => {
        console.log('Book updated successfully');
        this.router.navigate(['/books']); // Navigate to the book list or another appropriate page
      });
    }
  }

}
