import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Cargo, Company } from '../models/models';

const STORAGE_KEY = {
  companies: 'companiesList',
  cargos: 'cargosList'
};

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private cargosSource = new BehaviorSubject<Cargo[]>([]);
  private companiesSource = new BehaviorSubject<Company[]>([]);

  public companiesList$ = this.companiesSource.asObservable();
  public cargosList$ = this.cargosSource.asObservable();

  constructor() { }

  public setCompanies(companiesList: Company[]): void {
    window.localStorage.setItem(STORAGE_KEY.companies, JSON.stringify(companiesList));
    this.companiesSource.next(companiesList);
  }

  public getCompanies(): void {
    const storageData = window.localStorage.getItem(STORAGE_KEY.companies);
    const companiesList = storageData ? JSON.parse(storageData) : [];

    this.companiesSource.next(companiesList);
  }

  public setCargos(cargosList: Cargo[]): void {
    window.localStorage.setItem(STORAGE_KEY.cargos, JSON.stringify(cargosList));
    this.cargosSource.next(cargosList);
  }

  public getCargos(): void {
    const storageData = window.localStorage.getItem(STORAGE_KEY.cargos);
    const cargoList = storageData ? JSON.parse(storageData) : [];

    this.cargosSource.next(cargoList);
  }
}
