import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MyservService {
    private username: string;
    private clientid: '1451076871f2564c3a47';
    private clientsecret: 'e8a7408949831be0f209aca6a6257d2c78195ade';
  constructor(private httpClient: Http) {
      console.log('service is now ready');
      this.username = 'Atienodolphine01';
   }

   getusersProfile(){
     return this.httpClient.get('https://api.github.com/users/'+ this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
     .map(res => res.json());
   }
}
