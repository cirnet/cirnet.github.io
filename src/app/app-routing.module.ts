import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MockLoginComponent} from './mock-login/mock-login.component';
import { TodolistComponent } from './todolist/todolist.component';
import { WeatherComponent } from './weather/weather.component';
import {AuthGuardService} from './services/auth-guard.service';
import { Error404Component } from './error404/error404.component';
import { WeatherCurrentComponent } from './weather-current/weather-current.component';


const routes: Routes = [
 { path: '/todolist', component: TodolistComponent, canActivate: [AuthGuardService]},
 { path: '/login', component: MockLoginComponent },
 { path: '/weather', component: WeatherComponent, canActivate: [AuthGuardService] },
 { path: '/weather-current', component: WeatherCurrentComponent, canActivate: [AuthGuardService] },
 { path: '', redirectTo: '/login', pathMatch: 'full' },
 { path: '**', component: Error404Component },
];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
