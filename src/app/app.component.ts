import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private localStorage: LocalStorageService) {
  }

  public ngOnInit() {
    window.onstorage = () => {
      this.localStorage.getCompanies();
      this.localStorage.getCargos();
    };
  }
}
