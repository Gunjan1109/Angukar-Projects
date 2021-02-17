import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service'
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private service : WeatherService) {}

  ngOnInit(): void {
    
  }
  key = '4e36733f1837f8314470a4f46bcc7aa6'
    isClicked = false
   json;
  getWeather(city){
    this.isClicked = true
    console.log(city);
    
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.key}&units=metric`
    var data = fetch(url)

    data.then((data) => {
      data.json().then((weather) => {
        this.json = weather
       
      }).catch((err) => {
        console.log(err);
        
      }).catch((err) => {
        console.log(err);
        
      })
    })
    console.log(this.json);
    
  }

}
