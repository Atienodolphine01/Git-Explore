import { Component, OnInit } from '@angular/core';
import {ReposervService} from '../reposerv.service';
import {Repo} from '../repo';

@Component({
  selector: 'app-repolist',
  templateUrl: './repolist.component.html',
  styleUrls: ['./repolist.component.css']
})
export class RepolistComponent implements OnInit {
  myRepo: Repo[];

  constructor(public repo: ReposervService) { }

  getRepo(searchTerm: string) {
    this.repo.getRepo(searchTerm).subscribe(data => {
      this.myRepo = data;
      console.log(this.myRepo);
    });
  }

  ngOnInit() {
    this.getRepo('Atienodolphine01');
  }

}
