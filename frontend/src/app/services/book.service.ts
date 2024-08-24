import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = environment.apiBaseUrl + '/books';


  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getBook(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addBook(book: any): Observable<any> {
    return this.http.post(this.apiUrl, book);
  }

  updateBook(id: number, book: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
