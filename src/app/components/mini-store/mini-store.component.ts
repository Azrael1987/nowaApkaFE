import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { simpleReducer } from '../../simple.reducer';
import { Observable } from 'rxjs';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-mini-store',
  templateUrl: './mini-store.component.html',
  styleUrls: ['./mini-store.component.css'],
})
export class MiniStoreComponent implements OnInit {

  message$: Observable<string>;

  ngOnInit() {
  }


  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message');
  }

  spanishMessage() {
    this.store.dispatch({ type: 'Spanish' });
  }

  frenchMessage() {
    this.store.dispatch({ type: 'French' });
  }


}



