import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://localhost:7074/api';

  getAllProducts(): Observable<any> {
    const url = `${this.baseUrl}/Products/ListofProducts`;

    return this.http.get<any>(url);
  }
}
