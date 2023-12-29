import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://localhost:44305/api/CustomerApi';

  customerLogin(data: any): Observable<any> {
    const url = `${this.baseUrl}/login`;

    return this.http.post<any>(url, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  customerSignup(data: any): Observable<any> {
    const url = `${this.baseUrl}/signup`;

    return this.http.post<any>(url, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
