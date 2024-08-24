import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author';
import { CommonModule } from '@angular/common';
import { Router , RouterModule, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-show',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit {
  author!: Author;

  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.authorService.getAuthor(id).subscribe(author => {
      this.author = author;
    });
  }
}

