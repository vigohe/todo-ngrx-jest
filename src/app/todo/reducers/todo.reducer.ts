import { Action } from '@ngrx/store';
import {TodoActionTypes, TodoActions} from '../../todo/actions/todo.actions'
import {Todo} from '../models/todo';

export interface State {
  entitites: Todo[]
}

export const initialState: State = {
  entitites: []
};

export function reducer(state = initialState, action: TodoActions): State {
  switch (action.type) {
    case TodoActionTypes.AddTodo:
    return {
      entitites: [...state.entitites, {
        id: Date.now(),
        complete: false,
        text: action.payload,
      }]
    };

    default:
      return state;
  }
}
