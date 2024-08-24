import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorService } from '../../services/author.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  authorForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private authorService: AuthorService,
    private router: Router
  ) {
    this.authorForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      bio: ['', [Validators.maxLength(500)]]
    });
  }

  ngOnInit(): void {}

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

      this.authorService.addAuthor(formData).subscribe(() => {
        console.log('Author created successfully');
        this.router.navigate(['/authors']);
      });
    }
  }
}
