import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModel ,FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Form1Component } from './form1/form1.component';
import {HttpClient, HttpClientModule   } from '@angular/common/http';
import { Service1Service } from './service1.service';
import { MenuComponent } from './menu/menu.component';
import { Routes, RouterModule ,ActivatedRoute } from '@angular/router';
let  routes: Routes = [
 {path: 'Form', component:Form1Component},

{path:'App',component:AppComponent}]

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    MenuComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule  ,  HttpClientModule,
 RouterModule.forRoot(routes)
   
  ],
  providers: [Service1Service],
  bootstrap: [MenuComponent]
})
export class AppModule { }
