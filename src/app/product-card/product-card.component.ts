import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  getStockStatus(): string {
    return this.product.stock === 0 ? 'Out of Stock' : 'In Stock';
  }

  getStockStatusClass(): string {
    return this.product.stock === 0 ? 'text-danger' : 'text-success';
  }

  addToCart(product: Product): void {
    let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert('Product added to cart!');
  }
}
