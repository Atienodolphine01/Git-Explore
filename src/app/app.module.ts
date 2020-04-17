import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {MyservService} from './myserv.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersprofileComponent } from './usersprofile/usersprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
