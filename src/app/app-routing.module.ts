import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersprofileComponent } from './usersprofile/usersprofile.component';
import { RepolistComponent } from './repolist/repolist.component';
import { FofourpageComponent } from './fofourpage/fofourpage.component';


const routes: Routes = [
  {path: 'usersprofile', component: UsersprofileComponent},
  {path: 'repolist', component: RepolistComponent},
  {path: '**', component: FofourpageComponent},
  {path: '', redirectTo: '/usersprofile', pathMatch: 'Full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
