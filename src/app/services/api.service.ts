import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private baseUrl = 'https://fakestoreapi.com/products';

  constructor(private _httpClient: HttpClient) {}

  public geAlltProducts(sort?: string): Observable<IProduct[]> {
    const sortParam = sort ? `?sort=${sort}` : '';
    return this._httpClient.get<IProduct[]>(`${this.baseUrl}${sortParam}`);
  }

  public getProductById(id: number): Observable<IProduct> {
    return this._httpClient.get<IProduct>(`${this.baseUrl}/${id}`);
  }

  public getAllCategories(): Observable<Category[]> {
    return this._httpClient.get<Category[]>(`${this.baseUrl}/categories`);
  }

  public newProduct(product: IProduct): Observable<IProduct> {
    return this._httpClient.post<IProduct>(this.baseUrl, product);
  }

  public updateProduct(id: number, product: IProduct): Observable<IProduct> {
    return this._httpClient.put<IProduct>(`${this.baseUrl}/${id}`, product);
  }

  public deleteProduct(id: number): Observable<void> {
    return this._httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}

