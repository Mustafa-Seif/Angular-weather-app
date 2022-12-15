import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  constructor(private http: HttpClient) {}

  getWeatherDate(location:string) {
    return this.http.get<any>(
      `https://weatherbit-v1-mashape.p.rapidapi.com/current`,
    {
      params: {lon: '39.5', lat: '-78.5', units: 'metric'},
      headers: {
        'X-RapidAPI-Key': '679c40982fmsheadd8c7b09f0c6fp175affjsn2291559f1907',
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
      }
    });
  }
}
