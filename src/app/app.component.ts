import { Component } from '@angular/core';

import { routes } from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = " ";
  public routes = [];
  private looper = 0;
  private navIcon: String[] = ["home","note","lock_open", "help", "description"];

    constructor( ) {
        routes.forEach((r,i) => { 
          if(r.path && r.path != '**') {
            this.routes.push(r);
          }
        });
    }

}
