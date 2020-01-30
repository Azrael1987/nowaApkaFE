import { Action } from '@ngrx/store';

export function simpleReducer(state: string = 'Hello World', action: Action ) {
  console.log(action.type, state);

  switch (action.type) {
    case 'Spanish':
      return state = 'Halo Mundo';

    case 'French':
      return state = 'Bonjour le monde';

    default:
      return state;
  }
}
