import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { simpleReducer, } from '../../reducers/simple.reducer';
import { postReducer } from '../../reducers/post.reducer';
import { Observable } from 'rxjs';

import { Post } from '../../models/post.model';
import * as PostActions from '../../actions/post.action';

interface AppState {
  message: string;
  post: Post;
  productList: string[];
}

@Component({
  selector: 'app-mini-store',
  templateUrl: './mini-store.component.html',
  styleUrls: ['./mini-store.component.css'],
})
export class MiniStoreComponent implements OnInit {

  message$: Observable<string>;
  post: Observable<Post>;
  text: string; /// from input value
  product: string; /// for 2nd input value
  productList$: Observable<string[]>;

  ngOnInit() {
  }


  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message');
    this.post = this.store.select('post');
    this.productList$ = this.store.select('productList');
  }

  spanishMessage() {
    this.store.dispatch({ type: 'Spanish' });
  }

  frenchMessage() {
    this.store.dispatch({ type: 'French' });
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }

  downpoint() {
    this.store.dispatch(new PostActions.Downpoint());
  }

  uppoint() {
    this.store.dispatch(new PostActions.Uppoint());
  }

  cleanpoint() {
    this.store.dispatch(new PostActions.Cleanpoint());
  }

  addProduct() {
    this.store.dispatch(new PostActions.Addproduct(this.product));
  }

  resetProduct() {
    this.store.dispatch(new PostActions.Resetproduct());
  }

}



