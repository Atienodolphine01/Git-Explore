import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersprofileComponent } from './usersprofile/usersprofile.component';
import { RepolistComponent } from './repolist/repolist.component';
import { FofourpageComponent } from './fofourpage/fofourpage.component';


const routes: Routes = [
  {path: 'usersprofile', component: UsersprofileComponent},
  {path: 'repolist', component: RepolistComponent},
  {path: '', redirectTo: '/usersprofile', pathMatch: 'Prefix'},
  {path: '**', component: FofourpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
