import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Service1Service } from './service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component';
  name:String ='Welcome Naren to angular training';
  size:number =0;
  date1:Date;

  constructor(mysvc:Service1Service){
    this.date1 =mysvc.showTodayDate();

  }
  method1(){

    this.name ='Topic has changed';
  }
increment(){
  console.log(this.size);
this.resize(1);
  }

  decrement(){
    console.log(this.size);
    this.resize(-1);
      }

   resize(delta: number) {
        this.size = Math.min(40, Math.max(8, +this.size + delta));
             }
    
}
