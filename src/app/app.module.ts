import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import {MyservService} from './myserv.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersprofileComponent } from './usersprofile/usersprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersprofileComponent,
    HttpModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
