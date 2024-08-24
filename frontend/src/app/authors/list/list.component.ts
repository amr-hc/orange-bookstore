import { Component, OnInit } from '@angular/core';
import { AuthorService, Author } from '../../services/author.service';
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  authors: Author[] = [];
  currentPage = 1;
  totalPages = 1;
  pageSize = 8;

  constructor(
    private authorService: AuthorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors(): void {
    this.authorService.getAuthors(this.currentPage, this.pageSize).subscribe(data => {
      this.authors = data.rows;
      this.totalPages = Math.ceil(data.count / this.pageSize);
    });
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadAuthors();
    }
  }

  deleteAuthor(id: number): void {
    if (confirm('Are you sure you want to delete this author?')) {
      this.authorService.deleteAuthor(id).subscribe(() => {
        this.loadAuthors(); // Refresh the list after deletion
      });
    }
  }

  get totalPagesArray(): number[] {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }

}
