import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  template: `
  <div *ngFor="let item of cartItems()" class="mb-2">
     <app-cart-item [item]='item'></app-cart-item>
  </div>
  `,
  imports: [NgFor, CartItemComponent]
})
export class CartListComponent {
  cartItems = inject(CartService).cartItems;
}
