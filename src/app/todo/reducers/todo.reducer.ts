import { Action } from '@ngrx/store';
import {TodoActionTypes, TodoActions} from '../../todo/actions/todo.actions'
import {Todo} from '../models/todo';

export interface State {
  entities: Todo[]
}

export const initialState: State = {
  entities: []
};

export function reducer(state = initialState, action: TodoActions): State {
  switch (action.type) {
    case TodoActionTypes.AddTodo:
    return {
      entities: [...state.entities, {
        id: Date.now(),
        complete: false,
        text: action.payload,
      }]
    };
    case TodoActionTypes.RemoveTodo:
    return {
      entities: state.entities.filter(todo => todo.id !== action.payload.id)
    };
    case TodoActionTypes.ToggleTodo:
      return {
        ...state,
        entities: state.entities.map(item => item.id === action.payload.id ?
          { ...item,
            complete: !action.payload.complete
          } : item)
      };

    default:
      return state;
  }
}
