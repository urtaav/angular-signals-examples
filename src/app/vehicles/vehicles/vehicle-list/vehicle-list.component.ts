import { Component, computed } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { VehicleService } from '../vehicle.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
  imports: [NgClass, NgFor, NgIf],
})
export class VehicleListComponent {

  pageTitle = 'Vehicles';
  errorMessage = '';
  private readonly vehicleService = inject(VehicleService);

    // Component signals
    vehicles = computed(() => {
      try {
        return this.vehicleService.vehicles();
      } catch (e) {
        this.errorMessage = typeof e === 'string'? e : 'Error';
        return [];
      }
    });
    selectedVehicle = this.vehicleService.selectedVehicle;
    
      // When a vehicle is selected, emit the selected vehicle name
  onSelected(vehicleName: string): void {
    this.vehicleService.vehicleSelected(vehicleName);
  }
}
