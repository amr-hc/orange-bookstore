import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  bookForm: FormGroup;
  authors: Author[] = [];
  selectedFile: File | null = null;

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
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.authorService.getAuthors(1, 100).subscribe(authors => {
      this.authors = authors.rows;
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const formData = new FormData();
      formData.append('title', this.bookForm.get('title')!.value);
      formData.append('description', this.bookForm.get('description')!.value);
      formData.append('author_id', this.bookForm.get('author_id')!.value);
      formData.append('pages', this.bookForm.get('pages')!.value);
      formData.append('price', this.bookForm.get('price')!.value);

      // Only append the photo if one is selected
      if (this.selectedFile) {
        formData.append('photo', this.selectedFile);
      }

      this.bookService.addBook(formData).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }
}
