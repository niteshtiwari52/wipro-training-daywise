import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { Product } from '../../services/product';
import { Cart } from '../../services/cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dairy',
  imports: [CommonModule],
  templateUrl: './dairy.html',
  styleUrl: './dairy.css'
})
export class Dairy implements OnInit {
  products: IProduct[] = [];

  constructor(
    private productService: Product,
    private cartService: Cart
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProductsByCategory('Dairy').subscribe(products => {
      this.products = products;
    });
  }

  addToCart(product: IProduct): void {
    this.cartService.addToCart(product);
    // alert(`${product.name} added to cart!`);
  }
}

