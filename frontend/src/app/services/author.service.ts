// author.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

// Author Interface
export interface Author {
  id?: number;
  name: string;
  bio?: string;
  email?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Response {
  count: number;
  rows: Author[];

}

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = 'http://localhost:3000/authors';

  constructor(private http: HttpClient) { }

  /**
   * Get all authors
   * @returns Observable<Author[]>
   */
  getAuthors(): Observable<Response> {
    return this.http.get<Response>(this.apiUrl);
  }

  /**
   * Get a single author by ID
   * @param id - Author ID
   * @returns Observable<Author>
   */
  getAuthor(id: number): Observable<Author> {
    return this.http.get<Author>(`${this.apiUrl}/${id}`);
  }

  /**
   * Add a new author
   * @param author - Author data
   * @returns Observable<Author>
   */
  addAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(this.apiUrl, author);
  }

  /**
   * Update an existing author
   * @param id - Author ID
   * @param author - Updated author data
   * @returns Observable<Author>
   */
  updateAuthor(id: number, author: Author): Observable<Author> {
    return this.http.put<Author>(`${this.apiUrl}/${id}`, author);
  }

  /**
   * Delete an author
   * @param id - Author ID
   * @returns Observable<void>
   */
  deleteAuthor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
