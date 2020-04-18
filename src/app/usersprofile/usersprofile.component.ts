import { Component, OnInit } from '@angular/core';
import { MyservService } from '../myserv.service';
import {Profile} from '../profile';


@Component({
  selector: 'app-usersprofile',
  templateUrl: './usersprofile.component.html',
  styleUrls: ['./usersprofile.component.css']
})
export class UsersprofileComponent implements OnInit {
  user: Profile[];
  particlesJS: any;

  constructor(private http:MyservService) {}

  getSearchedUser(searchTerm) {
    this.http.searchUser(searchTerm).then(
      (success) => {
        this.user = this.http.user;
        console.log(this.user);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getSearchedUser('Atienodolphine01');
    let particlesJS;
    particlesJS.load('particles-js', 'particles.json', null);
  }

}
