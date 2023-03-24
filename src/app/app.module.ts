import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './banner/banner.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { ExprienceDetailComponent } from './work-experience/exprience-detail/exprience-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    WorkExperienceComponent,
    ExprienceDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
