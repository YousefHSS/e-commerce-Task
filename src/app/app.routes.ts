import { Routes } from '@angular/router';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import { ProductPageComponent } from './product-page/product-page.component';

export const routes: Routes = [
    { path: '', component: ProductCardsComponent },
    { path: 'product', component:  ProductPageComponent },


];
