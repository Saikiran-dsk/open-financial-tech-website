import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { CardsComponent } from './components/cards/cards.component';
import { UiSwitchModule } from 'ngx-ui-switch';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BaseLayoutComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,FormsModule,UiSwitchModule,
    AppRoutingModule,MatCardModule,MatSliderModule,MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
