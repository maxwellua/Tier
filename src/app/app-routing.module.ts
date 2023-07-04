import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyPageComponent } from './components/company-page/company-page.component';
import { CargoPageComponent } from './components/cargo-page/cargo-page.component';

const routes: Routes = [
  { path: 'companies', component: CompanyPageComponent },
  { path: 'cargos', component: CargoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
