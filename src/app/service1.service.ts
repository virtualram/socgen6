import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpHeaderResponse,HttpClientModule } from "@angular/common/http";
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  
  constructor(private http:HttpClient) { }


  showTodayDate() {
        let ndate = new Date();
        return ndate;
     }

    private url = 'http://127.0.0.1:8080/hello'; 
     getendpoint = ()=>{
     
    
      this.http.get('http://127.0.0.1:8080/hello').toPromise()
     .then((data:any) => {
      console.log('Return'+ data.json);
      
      //this.json = data.json;
     },
     
      );;
      
   }


adduser = (data)=>{
     
    
      this.http.post('http://127.0.0.1:8080/createuser',data).toPromise()
     .then((data:any) => {
      console.log('Return'+ data.json);
      
      //this.json = data.json;
     },
     
      );;
      
   }
}
