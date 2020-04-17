import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';
import {Profile} from './profile';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyservService {
  user: Profile[]= [];
  _URL = 'https://api.github.com/users/';
  token = "?access_token=4fc98b0af93605fc9cee9135a4a1d0177f15e6a7"

  constructor(private http: HttpClient) {}
  
  searchMyUser(searchTerm: string) {
    console.log('server is now ready')
    interface data {
      login: string;
      avatar_url: string;
      following: string;
      followers: string;
      public_repos: string;
      location:string;
      company:string;
      bio:string;
      searchTerms:string;
     
    }

    return new Promise((resolve, reject) => {
      this.user = [];

      this.http.get<data>(this._URL + searchTerm + this.token).toPromise().then(
        (results) => {
          
          this.user.push(results);
          resolve();
        },
        (error) => {
          reject();
        }
      );
    });
  }
   
}
