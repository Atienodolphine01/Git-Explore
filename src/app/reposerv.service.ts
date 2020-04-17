import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReposervService {
  _URL = 'https://api.github.com/users/';
  token = "?access_token=4fc98b0af93605fc9cee9135a4a1d0177f15e6a7"

  constructor(public  http: HttpClient) { }

  getRepo(searchTerm: string): Observable<any> {
    return this.http.get(this._URL + searchTerm + '/repos?' + this.token);
  }

}
