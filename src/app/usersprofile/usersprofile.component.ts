import { Component, OnInit } from '@angular/core';
import {MyservService} from '../myserv.service'

@Component({
  selector: 'pp-usersprofile',
  templateUrl: './usersprofile.component.html',
  styleUrls: ['./usersprofile.component.css']
})
export class UsersprofileComponent implements OnInit {

  constructor(private myserv: MyservService) { 
    this.myserv.getusersProfile(). subscribe(profile=>{
      console.log(profile)
    })
  }

  ngOnInit() {
  }

}
