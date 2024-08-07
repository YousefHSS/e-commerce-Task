import { Component, Inject } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';
import { ProductsService } from '../../_services/products.service';
import { CartService } from '../../_services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ToastModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  productsCount: number | undefined;

  constructor(protected router:Router,protected cartService: CartService){
   
  }
  ngOnInit() {
    // Subscribe to the observable to get updated products
    this.cartService.cartItems$.subscribe(data => {
      console.log(data);
      this.productsCount = this.cartService.getCountAllProducts();
    });
  }


}
