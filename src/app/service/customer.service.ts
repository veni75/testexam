import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  server = 'https://nettuts.hu/jms/veni75/customers';
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.server);
  }

  get(id:number): Observable<Customer> {
    return this.http.get<Customer>(`${this.server}/${id}`);
  }

  create(customer:Customer): Observable<Customer> {
    return this.http.post<Customer>(this.server, customer);
  }

  update(customer:Customer): Observable<Customer> {
    return this.http.patch<Customer>(`${this.server}/${customer.id}`, customer);
  }

  remove(customer:Customer): Observable<Customer> {
    return this.http.delete<Customer>(`${this.server}/${customer.id}`);
  }
}
