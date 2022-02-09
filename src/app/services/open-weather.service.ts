import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  constructor(
    private http: HttpClient
  ) { }
  API_KEY = 'bfc1e1170dde49e4936202756222701';
  getWeather(location: any): any {
    return this.http.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${this.API_KEY}&q=${location}&days=5&aqi=no&alerts=no`
    );
  }
}

