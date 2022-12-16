import { Component } from '@angular/core';
import { WeatherDataService } from './services/weather-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  location:string ="cairo";
  data?:any;
  constructor(private weatherData:WeatherDataService){}
  ngOnInit(){
    this.weatherData.getWeatherDate(this.location).subscribe({
      next:(val)=>{
        this.data = val;
      }
    }
    )
    this.location = ''
  }
  onSubmit(){
    this.weatherData.getWeatherDate(this.location).subscribe({
      next:(val)=>{
        this.data = val;
      }
    }
    )
    console.log(this.data)
    // console.log("first")
    this.location = ''

  }
  
  

  
}
