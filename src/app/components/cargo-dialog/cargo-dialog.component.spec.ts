import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoDialogComponent } from './cargo-dialog.component';

describe('CargoDialogComponent', () => {
  let component: CargoDialogComponent;
  let fixture: ComponentFixture<CargoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargoDialogComponent]
    });
    fixture = TestBed.createComponent(CargoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
