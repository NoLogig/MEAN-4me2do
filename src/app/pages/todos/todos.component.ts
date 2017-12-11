import { Component, OnInit } from '@angular/core';

var r = {
  path: ""
};

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public looper = 0;

  constructor() { }

  ngOnInit() {
  }

  loops() {

    this.looper = (++this.looper) % 6;

    this.looper == 1 ? r.path = "home" :
    this.looper == 2 ? r.path = "note" :
    this.looper == 3 ? r.path = "lock open" : 
    this.looper == 4 ? r.path = "help" :
    this.looper == 5 ? r.path = "description" : r.path = "home";
  }
}
