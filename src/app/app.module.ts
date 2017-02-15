import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarTopComponent } from './shared/navbar-top/navbar-top.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { SidebarLeftComponent } from './shared/sidebar-left/sidebar-left.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    FormSelectComponent,
    SidebarLeftComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
