import { Component } from '@angular/core';
import { WeatherDataService } from './services/weather-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  location:string ="london"
  data:any={}
  constructor(private weatherData:WeatherDataService){}
  ngOnInit(){
    this.weatherData.getWeatherDate(this.location).subscribe((val)=> {
      this.data = val
    }
    )
  }
  
  ngOnChanges(){
    this.weatherData.getWeatherDate(this.location).subscribe((val)=> {
      this.data = val
    }
    )

  }
  

  
}
