import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FormComponent,
    HeaderComponent,
    HomeComponent,
    GitsearchComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
