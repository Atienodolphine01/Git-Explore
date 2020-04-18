import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// import {MyservService} from './myserv.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersprofileComponent } from './usersprofile/usersprofile.component';
import { SearchformComponent } from './searchform/searchform.component';
import { RepolistComponent } from './repolist/repolist.component';
import { DatecountPipe } from './datecount.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { FofourpageComponent } from './fofourpage/fofourpage.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersprofileComponent,
    SearchformComponent,
    RepolistComponent,
    DatecountPipe,
    NavbarComponent,
    FofourpageComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
