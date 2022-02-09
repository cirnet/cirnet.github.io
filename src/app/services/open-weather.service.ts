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
      `https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&cnt=16&appid=${this.API_KEY}`
    );
  }
}

