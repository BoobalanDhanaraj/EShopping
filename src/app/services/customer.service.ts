import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://localhost:7074/api';

  customerLogin(data: any): Observable<any> {
    const url = `${this.baseUrl}/Customer/login`;

    return this.http.post<any>(url, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
