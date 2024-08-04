import { Routes } from '@angular/router';
import { ProductCardsComponent } from './_components/product-cards/product-cards.component';
import { ProductPageComponent } from './_components/product-page/product-page.component';
import { CartPageComponent } from './_components/cart-page/cart-page.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

export const routes: Routes = [
    { path: '', component: ProductCardsComponent },
    { path: 'product', component:  ProductPageComponent },
    { path: 'cart', component:   CartPageComponent},
    { path: 'login', component:   LoginComponent},
    { path: 'register', component:   RegisterComponent},


];
