import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Company } from '../../models/models';

@Component({
  selector: 'app-cargo-dialog',
  templateUrl: './cargo-dialog.component.html',
  styleUrls: ['./cargo-dialog.component.css']
})
export class CargoDialogComponent {
  public companies: Company[] = [];
  public form = this.fb.group({
    description: [''],
    pickupLocation: [''],
    deliveryLocation: [''],
    pickupDate: [''],
    deliveryDate: [''],
    companies: [[]]
  });

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CargoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: Company[]
  ) {
    this.companies = data
  }

  public addCargo(): void {
    this.dialogRef.close(this.form.value);
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
