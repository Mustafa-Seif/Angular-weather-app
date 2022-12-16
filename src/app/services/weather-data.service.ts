import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  constructor(private http: HttpClient) {}
  getWeatherDate(location:string) {
    return this.http.get<any>(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=15e4e80a13e92527ceb4365f589dd854&units=metric`,
    );
  }
}
