import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { Product } from '../../services/product';
import { Cart } from '../../services/cart';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Categories } from '../categories/categories';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule, ProductCard, Categories],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  topRecommended: IProduct[] = [];

  constructor(
    private productService: Product,
    private cartService: Cart
  ) { }

  ngOnInit(): void {
    this.loadTopRecommended();
  }

  loadTopRecommended(): void {
    // this.productService.getTopRecommended().subscribe(products => {
    //   this.topRecommended = products;
    // });
    this.productService.getProductsByCategory('Top Recommended').subscribe(products => {
      this.topRecommended = products;
    })

    console.log(this.topRecommended);
  }

  addToCart(product: IProduct): void {
    this.cartService.addToCart(product);
    // alert(`${product.name} added to cart!`);
  }
}
