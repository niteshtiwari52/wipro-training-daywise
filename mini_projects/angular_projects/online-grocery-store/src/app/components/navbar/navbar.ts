import { Component, OnInit } from '@angular/core';
import { Cart } from '../../services/cart';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  cartCount = 0;

  constructor(private cartService: Cart) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartCount = this.cartService.getCartCount();
    });
  }
}
