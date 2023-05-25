import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public readonly cartService = inject(CartService);
  remove = (i: number) => this.cartService.removeProductSignal(i);

  checkOut = () => console.log({ pago: this.cartService.subTotal(),cantidad:this.cartService.totalItems()})
  
}
