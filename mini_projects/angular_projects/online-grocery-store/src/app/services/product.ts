import { Injectable } from '@angular/core';
import { IProduct } from "../models/product.model";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Product {
  private products: IProduct[] = [
    // Top Recommended
    { id: 1, name: 'Top Pick Apple', description: 'Fresh apples, top pick of the month', price: 1.50, imageUrl: '/assets/apple.jpg', category: 'Top Recommended' },
    { id: 2, name: 'Top Pick Banana', description: 'Ripe bananas, top pick of the month', price: 0.70, imageUrl: '/assets/banana.jpg', category: 'Top Recommended' },
    
    // Fruits
    { id: 3, name: 'Orange', description: 'Fresh juicy oranges', price: 2.00, imageUrl: '/assets/orange.jpg', category: 'Fruits' },
    { id: 4, name: 'Grapes', description: 'Sweet green grapes', price: 3.50, imageUrl: '/assets/grapes.jpg', category: 'Fruits' },
    
    // Vegetables
    { id: 5, name: 'Carrots', description: 'Fresh organic carrots', price: 1.20, imageUrl: '/assets/carrots.jpg', category: 'Vegetables' },
    { id: 6, name: 'Broccoli', description: 'Green fresh broccoli', price: 2.80, imageUrl: '/assets/broccoli.jpg', category: 'Vegetables' },
    
    // Dairy
    { id: 7, name: 'Milk', description: 'Fresh whole milk', price: 3.20, imageUrl: '/assets/milk.jpg', category: 'Dairy' },
    { id: 8, name: 'Cheese', description: 'Aged cheddar cheese', price: 4.50, imageUrl: '/assets/cheese.jpg', category: 'Dairy' },
    
    // Snacks
    { id: 9, name: 'Chips', description: 'Crispy potato chips', price: 2.50, imageUrl: '/assets/chips.jpg', category: 'Snacks' },
    { id: 10, name: 'Cookies', description: 'Chocolate chip cookies', price: 3.00, imageUrl: '/assets/cookies.jpg', category: 'Snacks' },
    
    // Bread
    { id: 11, name: 'White Bread', description: 'Fresh white bread loaf', price: 2.20, imageUrl: '/assets/bread.jpg', category: 'Bread' },
    
    // Canned Goods
    { id: 12, name: 'Canned Tomatoes', description: 'Organic canned tomatoes', price: 1.80, imageUrl: '/assets/tomatoes.jpg', category: 'Canned Goods' }
  ];

  constructor() { }

  getAllProducts(): Observable<IProduct[]> {
    return of(this.products);
  }

  getProductsByCategory(category: string): Observable<IProduct[]> {
    const filteredProducts = this.products.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
    return of(filteredProducts);
  }

  getTopRecommended(): Observable<IProduct[]> {
    // Return first 2 products as top recommended
    // return of(this.products.slice(0, 2));
    const topRecommended = this.products.filter(product => product.category === 'Top Recommended');
    return of(topRecommended);
  }
}
