import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModel ,FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Form1Component } from './form1/form1.component';
import {HttpClient, HttpClientModule   } from '@angular/common/http';
import { Service1Service } from './service1.service';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule  ,  HttpClientModule
   
  ],
  providers: [Service1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
