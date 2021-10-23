import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarFormComponent } from './components/car-form/car-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrafficFormComponent } from './components/traffic-form/traffic-form.component';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from './material/material.module';
import { TrafficService } from './services/traffic/traffic.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CarService } from './services/car/car.service';

@NgModule({
  declarations: [
    AppComponent,
    CarFormComponent,
    TrafficFormComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    TrafficService,
    CarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
