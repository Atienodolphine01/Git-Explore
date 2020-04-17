import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
  searchTerm: string;
  @Output() searchEmmiter = new EventEmitter<any>();

  constructor() { }

  emmitUser() {
    this.searchEmmiter.emit(this.searchTerm);
    }
    
  ngOnInit() {
  }

}
