import { Component, computed, inject } from '@angular/core';
import { DecimalPipe, NgFor, NgIf } from '@angular/common';
import { VehicleService } from '../vehicle.service';
import { CartService } from '../../cart/cart.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle-detail',
  standalone: true,
  imports: [NgFor, NgIf, DecimalPipe],
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent {
  errorMessage = '';

  private readonly vehicleService = inject(VehicleService);
  private readonly cartService = inject(CartService);

  // Signals used in the template
  vehicle = this.vehicleService.selectedVehicle;
  vehicleFilms = this.vehicleService.vehicleFilms;

  pageTitle = computed(() => this.vehicle() ? `Detail for: ${this.vehicle()?.name}` : '');

  addToCart(vehicle: Vehicle | undefined) {
    if (vehicle) {
      this.cartService.addToCart(vehicle);
    }
  }
  
}
