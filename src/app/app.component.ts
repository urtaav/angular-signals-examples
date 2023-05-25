import { Component, computed, inject } from '@angular/core';
import { CartService as vehicleCartService} from './vehicles/cart/cart.service';
import { CartService } from './cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-signals';
  public cartService = inject(CartService);
  public vehicleCartService = inject(vehicleCartService);

  cartCount = computed(() => this.vehicleCartService.cartItems().reduce((acc, item) => acc + item.quantity, 0));
}
