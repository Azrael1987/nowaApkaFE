import * as PostAction from '../actions/post.action';
import { Post } from '../models/post.model';

export type Action = PostAction.All;

/// Default app state
const defaultState: Post = {
  likes: 0,
  text: 'Hello. This is default post'
};

/// Helper function to create new state object
const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

/// Reducer function
export function postReducer(state: Post = defaultState, action: Action) {
  console.log(action.type, state);

  switch (action.type) {
    case PostAction.EDIT_TEXT:
      return newState(state, { text: action.payload });

    case PostAction.UPVOTE:
      return newState(state, { likes: state.likes + 1 });

    case PostAction.DOWNVOTE:
      return newState(state, { likes: state.likes - 1 });

    case PostAction.RESET:
      return defaultState;

    default:
      return state;
  }

}
