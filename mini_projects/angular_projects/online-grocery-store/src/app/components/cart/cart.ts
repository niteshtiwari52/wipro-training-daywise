import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { Product } from '../../services/product';
import { CommonModule } from '@angular/common';
import { Cart as CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {
  products: IProduct[] = [];

  constructor(
    private productService: Product,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    // this.productService.getProductsByCategory('Cart').subscribe(products => {
    //   this.products = products;
    // });
    this.cartService.cartItems$.subscribe(items => {
      this.products = items.map(item => item.product);
    });
  }

  addToCart(product: IProduct): void {
    this.cartService.addToCart(product);
    // // alert(`${product.name} added to cart!`);
  }
  getTotalPrice(): number {
    return this.cartService.getCartTotal();
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    this.cartService.clearCart()
  }
}

