import { Action } from '@ngrx/store';
import { Todo } from '../models/todo';

export enum TodoActionTypes {
  AddTodo = '[Todo] ADD',
  RemoveTodo = '[Todo] Remove',
  ToggleTodo = '[Todo] Toggle'
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.AddTodo;
  constructor(public payload : string) {};
}

export class RemoveTodo implements Action {
  readonly type = TodoActionTypes.RemoveTodo;
  constructor(public payload : Todo) {};
}

export class ToggleTodo implements Action {
  readonly type = TodoActionTypes.ToggleTodo;
  constructor(public payload : Todo) {};
}


export type TodoActions = AddTodo | RemoveTodo | ToggleTodo;
