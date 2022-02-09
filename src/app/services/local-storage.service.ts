import { Injectable } from '@angular/core';
export const AUTH_TOKEN_KEY = 'token';
export const AUTH_TOKEN_VALUE = 'token_from_auth_server';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
 constructor() { }
 public setItem(key: string, value: string) {
 localStorage.setItem(key, value);
 }
 public getItem(key: string){
 return localStorage.getItem(key)
 }
 public removeItem(key:string) {
 localStorage.removeItem(key);
 }
 public clear(){
 localStorage.clear();
 }
}
