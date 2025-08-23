import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { Product } from '../../services/product';
import { Cart } from '../../services/cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-recommended',
  imports: [CommonModule],
  templateUrl: './top-recommended.html',
  styleUrls: ['./top-recommended.css','../../../styles.css']
})
export class TopRecommended implements OnInit {
  products: IProduct[] = [];

  constructor(
    private productService: Product,
    private cartService: Cart
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getTopRecommended().subscribe(products => {
      this.products = products;
    });
  }

  addToCart(product: IProduct): void {
    this.cartService.addToCart(product);
    // alert(`${product.name} added to cart!`);
  }
}
