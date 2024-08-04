import { Component } from '@angular/core';
import { CartItem } from '../../cart-item';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  cartItems: CartItem[] = [];

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
      //use the api to get each item using it's id
      //then add it to the cart
    }
  }
}
