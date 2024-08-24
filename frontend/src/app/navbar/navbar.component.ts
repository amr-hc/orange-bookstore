import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  searchTerm: string = '';

  constructor(private router: Router) {}

  onSearch(): void {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/books'], { queryParams: { search: this.searchTerm } });
    } else {
      this.router.navigate(['/books']);
    }
  }


}
