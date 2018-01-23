import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { TripOverviewComponent } from './trip-overview/trip-overview.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { FinalComponent } from './final/final.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    WelcomeComponent,
    TripOverviewComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserDashComponent,
    AdminDashComponent,
    FinalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
