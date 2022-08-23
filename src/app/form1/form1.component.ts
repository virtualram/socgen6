import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from '../user';
import { Service1Service } from '../service1.service';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
//second version updated by developer 2
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  postData = {
   name: '',
    email: ''
  };
  usr:User;
  svc:Service1Service;
  profileForm = new FormGroup({  //instantiate new form group
    name: new FormControl('',[Validators.required,Validators.minLength(4)]), //within from group instantiate new form control
    email : new FormControl(''),
  });

  constructor(private mysvc:Service1Service) { 
    mysvc.getendpoint();
  }

  ngOnInit() {
  }

  onSubmit(){

    console.log(this.profileForm.get('name').value);
    console.log(this.profileForm.get('email').value);
     this.usr = new User();
     this.postData = {
      name: this.profileForm.get('name').value,
       email: this.profileForm.get('email').value
     };
   
   

    //console.log(this.usr);
 
    this.mysvc.adduser(this.postData);
    
  }

}
