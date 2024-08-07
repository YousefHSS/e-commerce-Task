import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsSubject = new BehaviorSubject<any[]>([]);
  Products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.initialize();
  }

  private async initialize(): Promise<void> {
 
    await this.fetchData();

  }

  private async fetchData(): Promise<void> {
    try {
      const data: any = await this.http.get<any[]>('/assets/products.json').toPromise();
      this.productsSubject.next(data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }

  async getProduct(id: number): Promise<any> {
    if (this.productsSubject.getValue().length === 0) {
      await this.initialize();
    }
    
    const products = this.productsSubject.getValue();
    console.log('All products:', products);
    console.log('Looking for product with id:', id);
    
    const product = products.find((x: { id: number }) => x.id === id);
    console.log('Found product:', product);
  
    return product;
  }

  getAllProducts() {
    return this.productsSubject.getValue();
  }
  getCountAllProducts() {
    return localStorage.getItem('cart')?.length || 0;
  }
}