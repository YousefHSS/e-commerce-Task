import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  addToCart(id: number) {
    this.initialize();
  }
  private productsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.productsSubject.asObservable();

  constructor() {
    this.initialize();
  }

  private async initialize(): Promise<void> {
 
    //get  products from local storage
    const storedProducts = localStorage.getItem('cart');
    if (storedProducts) {
      this.productsSubject.next(JSON.parse(storedProducts));
    }

  }

  

  

  getAllProducts() {
    return this.productsSubject.getValue();
  }
  getCountAllProducts() {
    //add the count of all products in the cart using quantity
    var count =  this.productsSubject.getValue().reduce((sum, product) => sum + product.quantity, 0);
    //return the count
    return count;
  }
}