import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AUTH_TOKEN_KEY, LocalStorageService} from '../services/local-storage.service';
@Injectable()
export class AuthGuardService implements CanActivate {
 constructor(
 private localStorageService: LocalStorageService,
 private router: Router
 ) {
 }
 canActivate(): boolean {
 // uproszczenie - powinna byc weryfikacja
 // po stronie serwera, np. czy token jeszcze aktywny
 if (!this.localStorageService.getItem(AUTH_TOKEN_KEY)) {
 this.router.navigate(['login']);
 return false;
}
return true;
}
}
