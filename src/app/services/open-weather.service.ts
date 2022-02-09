import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  constructor(
    private http: HttpClient
  ) { }
  API_KEY = '4fe093df7914485aab8210852220902';
  getWeather(location: any): any {
    return this.http.get(
      `https://api.weatherapi.com/v1/forecast.xml?key=${this.API_KEY}&q=${location}&days=3&aqi=no&alerts=no`
    );
  }
}

