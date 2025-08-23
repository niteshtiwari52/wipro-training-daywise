import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { TopRecommended } from './components/top-recommended/top-recommended';
import { Fruits } from './components/fruits/fruits';
import { Vegetables } from './components/vegetables/vegetables';
import { Dairy } from './components/dairy/dairy';
import { Snacks } from './components/snacks/snacks';
import { Cheese } from './components/cheese/cheese';
import { Bread } from './components/bread/bread';
import { CannedGoods } from './components/canned-goods/canned-goods';
import { Cart } from './components/cart/cart';
import { Checkout } from './components/checkout/checkout';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', component: Home },
  { path: 'top-recommended', component: TopRecommended },
  { path: 'fruits', component: Fruits },
  { path: 'vegetables', component: Vegetables },
  { path: 'dairy', component: Dairy },
  { path: 'snacks', component: Snacks },
  { path: 'cheese', component: Cheese },
  { path: 'breads', component: Bread },
  { path: 'canned-goods', component: CannedGoods },
  { path: 'cart', component: Cart },
  { path: 'checkout', component: Checkout }
];
