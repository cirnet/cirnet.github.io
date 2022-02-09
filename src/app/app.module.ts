import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {OpenWeatherService} from './services/open-weather.service';
import { AppRoutingModule } from './app-routing.module';
import { TodolistComponent } from './todolist/todolist.component';
import { HeaderComponent } from './header/header.component';
import { MockLoginComponent } from './mock-login/mock-login.component';
import { Error404Component } from './error404/error404.component';
import { AuthGuardService } from './services/auth-guard.service';
import { WeatherCurrentComponent } from './weather-current/weather-current.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    TodolistComponent,
    HeaderComponent,
    MockLoginComponent,
    Error404Component,
    WeatherCurrentComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    OpenWeatherService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
