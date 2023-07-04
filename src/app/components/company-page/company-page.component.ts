import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';

import { CompanyDialogComponent } from '../company-dialog/company-dialog.component';

import { LocalStorageService } from '../../services/local-storage.service';

import { Company } from '../../models/models';

const COMPANY_FIELDS = ['companyName', 'contactFirstName', 'contactLastName'];

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit, OnDestroy {
  public companies: Company[] = [];
  public fields = COMPANY_FIELDS;

  private destroy$: Subject<void> = new Subject();

  constructor(
    public dialog: MatDialog,
    private localStorage: LocalStorageService
  ) {
  }

  private addNewCompany(company: Company): void {
    const newCompaniesList = [...this.companies, company];
    this.localStorage.setCompanies(newCompaniesList);
  }

  public openNewCompanyDialog(): void {
    const dialogRef = this.dialog.open(CompanyDialogComponent, { width: '600px' });

    dialogRef.afterClosed().subscribe(company => {

      if (company) {
        this.addNewCompany(company);
      }
    })
  }

  public ngOnInit() {
    this.localStorage.companiesList$
      .pipe(takeUntil(this.destroy$))
      .subscribe(companies => this.companies = companies);

    this.localStorage.getCompanies();
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
