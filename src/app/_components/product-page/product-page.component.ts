import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../_services/products.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
product: any;


  constructor(private route: ActivatedRoute, private http: HttpClient, private ProductService: ProductsService) {
    
  }
  ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      const id = +params['id']; // Ensure the id is a number
      console.log('Product ID from query params:', id);
      this.product = await this.ProductService.getProduct(id);
      console.log('Product found:', this.product);
    });
  }

}
