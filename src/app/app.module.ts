import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { EventScanComponent } from './event-scan/event-scan.component';
import { StatsModule } from './stats/stats.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    EventScanComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StatsModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
