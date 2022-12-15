import { Component } from '@angular/core';
import { WeatherDataService } from './services/weather-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  location:string ="cairo"
  data:any={}
  constructor(private weatherData:WeatherDataService){}
  ngOnInit(){
    // this.weatherData.getWeatherDate("cairo")
    this.weatherData.getWeatherDate("cairo").subscribe((val)=> {
      this.data = val.data[0]
      console.log(this.data)
    }
    )
  }
  

  
}
