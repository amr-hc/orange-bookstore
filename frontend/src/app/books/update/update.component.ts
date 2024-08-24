import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author';
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
  selectedFile: File | null = null;

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
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.bookId = +this.route.snapshot.paramMap.get('id')!;
    this.bookService.getBook(this.bookId).subscribe(book => {
      this.bookForm.patchValue(book);
    });

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

      if (this.selectedFile) {
        formData.append('photo', this.selectedFile);
      }

      this.bookService.updateBook(this.bookId, formData).subscribe(() => {
        console.log('Book updated successfully');
        this.router.navigate(['/books']);
      });
    }
  }
}
