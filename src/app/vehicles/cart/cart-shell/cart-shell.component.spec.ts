import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartShellComponent } from './cart-shell.component';

describe('CartShellComponent', () => {
  let component: CartShellComponent;
  let fixture: ComponentFixture<CartShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CartShellComponent]
    });
    fixture = TestBed.createComponent(CartShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
