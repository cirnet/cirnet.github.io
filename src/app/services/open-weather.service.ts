import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  constructor(
    private http: HttpClient
  ) { }
  API_KEY = 'c49da484335e7e02783dcf6e28f9ddb6';
  getWeather(location: any): any {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&cnt=16&appid=${this.API_KEY}`
    );
  }
}

