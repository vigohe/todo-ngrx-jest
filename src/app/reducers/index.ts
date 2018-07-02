import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTodo from '../todo/reducers/todo.reducer';
import { localStorageSync } from "ngrx-store-localstorage";

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ["todo"], rehydrate: true })(reducer);
}

export interface State {

  todo: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {

  todo: fromTodo.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [localStorageSyncReducer] : [localStorageSyncReducer];
