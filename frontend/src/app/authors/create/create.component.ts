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

  constructor(
    private fb: FormBuilder,
    private authorService: AuthorService,
    private router: Router
  ) {
    this.authorForm = this.fb.group({
      name: ['', Validators.required],
      bio: [''],
      photo: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.authorForm.valid) {
      this.authorService.addAuthor(this.authorForm.value).subscribe(() => {
        console.log('Author created successfully');
        this.router.navigate(['/authors']);
      });
    }
  }
}
