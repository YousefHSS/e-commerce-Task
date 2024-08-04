import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductCardsComponent } from "./_components/product-cards/product-cards.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from "./_components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule,RouterOutlet, ProductCardsComponent, NavbarComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  constructor( ) {

  }
  title = 'e-commerce-Task';
  //take data from json file

}
