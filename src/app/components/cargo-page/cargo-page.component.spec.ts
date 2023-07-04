import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoPageComponent } from './cargo-page.component';

describe('CargoPageComponent', () => {
  let component: CargoPageComponent;
  let fixture: ComponentFixture<CargoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargoPageComponent]
    });
    fixture = TestBed.createComponent(CargoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
