import { Component, OnInit } from '@angular/core';

import {AUTH_TOKEN_KEY, LocalStorageService} from '../services/local-storage.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  mockLogout() {
    this.localStorageService.removeItem(AUTH_TOKEN_KEY);
    // lub np. czyszczenie całego storage
    // this.localStorageService.clear();
    this.router.navigate(['/login']);
    }

}
