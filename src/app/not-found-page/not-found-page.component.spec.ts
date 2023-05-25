import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFOundPageComponent } from './not-found-page.component';

describe('NotFOundPageComponent', () => {
  let component: NotFOundPageComponent;
  let fixture: ComponentFixture<NotFOundPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFOundPageComponent]
    });
    fixture = TestBed.createComponent(NotFOundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
