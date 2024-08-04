import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../_services/products.service';
import { ToastService } from '../../_services/toast.service';
import { NgTemplateOutlet } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsContainer } from '../toasts-container/toasts-container.component';
import { CartItem } from '../../cart-item';
@Component({
  selector: 'app-product-cards',
  standalone: true,
  imports: [NgbTooltipModule, ToastsContainer],
  templateUrl: './product-cards.component.html',
  styleUrl: './product-cards.component.css'
})
export class ProductCardsComponent {
  toastService = inject(ToastService);
	showSuccess(template: TemplateRef<any>) {
    console.log('template', template);
		this.toastService.show({ template, classname: 'bg-success text-light', delay: 1000 });
	}
AddToCart(id: number, event: any) {

  // disable bubbling
  event.stopPropagation();
  //get the orignal object from local storage
  let cart = localStorage.getItem('cart');
  //if cart is null
  if (cart == null) {
    //create an array
    var itemToBeAdded = JSON.stringify([{ id: id, quantity: 1 }]);
    localStorage.setItem('cart', itemToBeAdded);
  } else {
    //if cart is not null
    //parse the cart
    let items: CartItem[] = JSON.parse(cart);
    //check if the item is already in the cart
    let item : CartItem | undefined = items.find((item: { id: number }) => item.id == id);
    if (item == undefined) {
      //if item is not in the cart
      //add it
      items.push({
        id: id, quantity: 1,
        price: null,
        name: null,
        image: null,
        description: null
      });
      localStorage.setItem('cart', JSON.stringify(items));
    } else {
      //if item is already in the cart add one to the quantity
      item.quantity++;
      localStorage.setItem('cart', JSON.stringify(items));
    }
  }
}
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
