import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-cards',
  standalone: true,
  imports: [],
  templateUrl: './product-cards.component.html',
  styleUrl: './product-cards.component.css'
})
export class ProductCardsComponent {
navigate(path: string, args: any) {

  this.router.navigate([path], { queryParams: { id: args } });

}
  products: any;
  constructor(private router: Router ,private productsService: ProductsService) { 
  }
  ngOnInit() {
    // Subscribe to the observable to get updated products
    this.productsService.Products$.subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }

}
