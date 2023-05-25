import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleListComponent } from '../vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from '../vehicle-detail/vehicle-detail.component';

@Component({
  selector: 'app-vehicle-shell',
  standalone: true,
  imports: [VehicleListComponent, VehicleDetailComponent],
  template: `
  <div class='row mt-4'>
    <div class='col-md-4'>
        <app-vehicle-list/>
    </div>
    <div class='col-md-8'>
        <app-vehicle-detail/>
    </div>
</div> 
  `,
})
export class VehicleShellComponent {

}
