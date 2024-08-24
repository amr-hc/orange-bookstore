import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { AuthorService, Author } from '../../services/author.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';  // <-- Import this module
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  bookForm: FormGroup;
  authors: Author[] = [];

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private authorService: AuthorService,
    private router: Router
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
    this.authorService.getAuthors().subscribe(authors => {
      this.authors = authors.rows;
      console.log(authors.rows);
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      this.bookService.addBook(this.bookForm.value).subscribe(() => {
        console.log('Book created successfully');
        this.router.navigate(['/books']); // Navigate to the book list or another appropriate page
      });
    }
  }

}
