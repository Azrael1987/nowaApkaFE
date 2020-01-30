import { Action } from '@ngrx/store';

const  defaultMessage = 'Welcome in this place'

export function secondSimpleReducer(state: string = defaultMessage, action: Action) {
  console.log(action.type, state);

  switch (action.type) {
    case 'Polish':
      return state = 'Witaj w tym miejscu';

    case 'Italian':
      return state = 'Benvenuti in questo posto';

    case 'Reset':
      return state = defaultMessage;

    default:
      return state;
  }
}
