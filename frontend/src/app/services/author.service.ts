// author.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Author } from '../../app/models/author';

// Author Interface


export interface Response {
  count: number;
  rows: Author[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = environment.apiBaseUrl+'/authors';

  constructor(private http: HttpClient) { }


  getAuthors(page: number, limit: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}&limit=${limit}`);
  }



  getAuthor(id: number): Observable<Author> {
    return this.http.get<Author>(`${this.apiUrl}/${id}`);
  }


  addAuthor(author: any): Observable<any> {
    return this.http.post(this.apiUrl, author);
  }


  updateAuthor(id: number, author: any): Observable<Author> {
    return this.http.put<Author>(`${this.apiUrl}/${id}`, author);
  }

  deleteAuthor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


}
