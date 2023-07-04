import { Component } from '@angular/core';
import { Cargo, Company } from '../../models/models';
import { Subject, takeUntil } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from '../../services/local-storage.service';
import { CargoDialogComponent } from '../cargo-dialog/cargo-dialog.component';

const CARGO_FIELDS = [
  'description',
  'pickupLocation',
  'deliveryLocation',
  'pickupDate',
  'deliveryDate',
  'companies'
];

@Component({
  selector: 'app-cargo-page',
  templateUrl: './cargo-page.component.html',
  styleUrls: ['./cargo-page.component.css']
})
export class CargoPageComponent {
  public cargos: Cargo[] = [];
  public companies: Company[] = [];
  public fields: string[] = CARGO_FIELDS;

  private destroy$: Subject<void> = new Subject();

  constructor(
    public dialog: MatDialog,
    private localStorage: LocalStorageService
  ) { }

  private addNewCargoRequest(cargo: Cargo): void {
    const newCargosList = [...this.cargos, cargo];
    this.localStorage.setCargos(newCargosList);
  }

  public openNewCargoDialog(): void {
    const dialogRef = this.dialog.open(CargoDialogComponent,{
      width: '600px',
      data: this.companies
    });

    dialogRef.afterClosed().subscribe( cargo => {
      if (cargo) {
        this.addNewCargoRequest(cargo);
      }
    })
  }

  public getCompanyNames(companies: Company[]): string {
    return companies.map(({companyName}) => companyName).join(', ');
  }

  public ngOnInit() {
    this.localStorage.cargosList$
      .pipe(takeUntil(this.destroy$))
      .subscribe(cargos => this.cargos = cargos);

    this.localStorage.companiesList$
      .pipe(takeUntil(this.destroy$))
      .subscribe(companies => this.companies = companies);

    this.localStorage.getCargos();
    this.localStorage.getCompanies();
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
