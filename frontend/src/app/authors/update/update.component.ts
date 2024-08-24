import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  authorForm: FormGroup;
  author!: Author;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.authorForm = this.fb.group({
      name: ['', Validators.required],
      bio: ['']
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.authorService.getAuthor(id).subscribe(author => {
      this.author = author;
      this.authorForm.patchValue(author);
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  onSubmit(): void {
    if (this.authorForm.valid) {
      const formData = new FormData();
      formData.append('name', this.authorForm.get('name')!.value);
      formData.append('bio', this.authorForm.get('bio')!.value);

      if (this.selectedFile) {
        formData.append('photo', this.selectedFile);
      }

      this.authorService.updateAuthor(this.author.id!, formData).subscribe(() => {
        console.log('Author updated successfully');
        this.router.navigate(['/authors', this.author.id]);
      });
    }
  }
}
