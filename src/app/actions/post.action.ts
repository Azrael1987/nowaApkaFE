import { Action } from '@ngrx/store';

export const EDIT_TEXT = '[Post] Edit';
export const UPVOTE = '[Post] Upvote';
export const DOWNVOTE = '[Post] Downvote';
export const RESET = '[Post] Reset';
export const UPPOINT = '[Post] Uppoint';
export const DOWNPOINT = '[Post] Downpoint';
export const CLEANPOINT = '[Post] Cleanpoint';

export class EditText implements Action {
  readonly type = EDIT_TEXT;

  /// user constructor to send a payload with the action
  constructor(public payload: string) {}
}

export class Upvote implements Action {
  readonly type = UPVOTE;
}

export class Downvote implements Action {
  readonly type = DOWNVOTE;
}

export class Reset implements Action {
  readonly type = RESET;
}

export class Uppoint implements Action {
  readonly type = UPPOINT;
}

export class Downpoint implements Action {
  readonly type = DOWNPOINT;
}

export class Cleanpoint implements Action {
  readonly type = CLEANPOINT;
}

export type All = Upvote | Downvote | Reset | EditText | Uppoint | Downpoint | Cleanpoint;


