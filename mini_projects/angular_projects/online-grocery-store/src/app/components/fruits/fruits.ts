import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { Product } from '../../services/product';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-fruits',
  imports: [CommonModule],
  templateUrl: './fruits.html',
  styleUrl: './fruits.css'
})
export class Fruits implements OnInit {
  products: IProduct[] = [];

  constructor(
    private productService: Product,
    private cartService: Cart
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProductsByCategory('Fruits').subscribe(products => {
      this.products = products;
    });
  }

  addToCart(product: IProduct): void {
    this.cartService.addToCart(product);
    // alert(`${product.name} added to cart!`);
  }
}

