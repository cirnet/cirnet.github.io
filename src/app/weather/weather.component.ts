import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {OpenWeatherService} from '../services/open-weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weatherSearchForm: FormGroup;
  public weatherData: any;

  constructor(

    private formBuilder: FormBuilder,
    private openWeatherService: OpenWeatherService
  ) {
    this.weatherSearchForm = this.formBuilder.group({
      city: ['', Validators.required]
    });
  }

  checkWeather(): void {
    if (this.weatherSearchForm.valid) {
    this.openWeatherService
    .getWeather(this.weatherSearchForm.value.city)
    .subscribe((data: any) => (this.weatherData = data));
    }
  }
   
  fakeArray = new Array(3)

  ngOnInit(): void {

  }



    div1:boolean=false;
    

    show(){
        this.div1=true
    }

} 
