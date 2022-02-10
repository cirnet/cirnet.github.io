import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  constructor(
    private http: HttpClient
  ) { }
  API_KEY = 'dcc84956252f2decdfff200fe7dbad17';
  getWeather(location: any): any {
    return this.http.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${this.API_KEY}&q=${location}&days=3&aqi=no&alerts=no      `
    );
  }
}

