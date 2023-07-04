import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-company-dialog',
  templateUrl: './company-dialog.component.html',
  styleUrls: ['./company-dialog.component.css']
})
export class CompanyDialogComponent {
  public form = this.fb.group({
    companyName: [''],
    contactFirstName: [''],
    contactLastName: ['']
  });

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CompanyDialogComponent>
  ) {}

  public addCompany(): void {
    this.dialogRef.close(this.form.value);
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
