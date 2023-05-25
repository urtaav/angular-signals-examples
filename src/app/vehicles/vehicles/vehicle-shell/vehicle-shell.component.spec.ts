import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleShellComponent } from './vehicle-shell.component';

describe('VehicleShellComponent', () => {
  let component: VehicleShellComponent;
  let fixture: ComponentFixture<VehicleShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VehicleShellComponent]
    });
    fixture = TestBed.createComponent(VehicleShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
