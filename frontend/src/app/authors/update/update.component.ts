import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService, Author } from '../../services/author.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  authorForm: FormGroup;
  author!: Author;

  constructor(
    private fb: FormBuilder,
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.authorForm = this.fb.group({
      name: ['', Validators.required],
      bio: [''],
      photo: ['']
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.authorService.getAuthor(id).subscribe(author => {
      this.author = author;
      this.authorForm.patchValue(author);
    });
  }

  onSubmit(): void {
    if (this.authorForm.valid) {
      const updatedAuthor = { ...this.author, ...this.authorForm.value };
      this.authorService.updateAuthor(this.author.id!, updatedAuthor).subscribe(() => {
        console.log('Author updated successfully');
        this.router.navigate(['/authors', this.author.id]);
      });
    }
  }

}
