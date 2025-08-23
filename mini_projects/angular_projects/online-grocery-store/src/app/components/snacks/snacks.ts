import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { Product } from '../../services/product';
import { Cart } from '../../services/cart';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-snacks',
  imports: [CommonModule],
  templateUrl: './snacks.html',
  styleUrl: './snacks.css'
})
export class Snacks implements OnInit {
  products: IProduct[] = [];

  constructor(
    private productService: Product,
    private cartService: Cart
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProductsByCategory('Snacks').subscribe(products => {
      this.products = products;
    });
  }

  addToCart(product: IProduct): void {
    this.cartService.addToCart(product);
    // alert(`${product.name} added to cart!`);
  }
}

