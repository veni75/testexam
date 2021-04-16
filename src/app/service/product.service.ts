import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  server = 'https://nettuts.hu/jms/veni75/products';
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.server);
  }

  get(id:number): Observable<Product> {
    return this.http.get<Product>(`${this.server}/${id}`);
  }

  create(product:Product): Observable<Product> {
    return this.http.post<Product>(this.server, product);
  }

  update(product:Product): Observable<Product> {
    return this.http.patch<Product>(`${this.server}/${product.id}`, product);
  }

  remove(product:Product): Observable<Product> {
    return this.http.delete<Product>(`${this.server}/${product.id}`);
  }
}
