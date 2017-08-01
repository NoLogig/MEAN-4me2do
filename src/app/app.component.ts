import { Component } from '@angular/core';
<<<<<<< HEAD
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';
import { IAppState } from './store/index';
import { USER_GET } from './store/profile/profile.actions';
=======
>>>>>>> 6f98240ad55af890825641613a1169ccc124bdaa

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD

  observable$: Observable<{}>;

  constructor(http: Http, store: Store<IAppState>) {
    this.observable$ = http
      .get('/api/public/simple')
      .map((response: Response) => response.json());

    store.dispatch({
      type: USER_GET
    });
  }
=======
  title = 'app';
>>>>>>> 6f98240ad55af890825641613a1169ccc124bdaa
}
