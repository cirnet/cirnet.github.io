import { Component, OnInit } from '@angular/core';
import {AUTH_TOKEN_KEY, AUTH_TOKEN_VALUE, LocalStorageService} from '../services/local-storage.service';
import {Router} from '@angular/router';

@Component({
 selector: 'app-mock-login',
 templateUrl: './mock-login.component.html',
 styleUrls: ['./mock-login.component.css']
})
export class MockLoginComponent implements OnInit {
 constructor(
 private localStorageService: LocalStorageService,
 private router: Router
 ) { }
 ngOnInit(): void {
 }
 mockLogin() {
 this.localStorageService.setItem(AUTH_TOKEN_KEY, AUTH_TOKEN_VALUE);
 this.router.navigate(['todolist']);
 }
}
