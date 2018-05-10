import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../reducers/todo.reducer';
import { AddTodo, ToggleTodo, RemoveTodo } from '../../actions/todo.actions';
import { Todo } from '../../models/todo';
import { Observable } from 'rxjs';
import { State } from '../../../reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todos: Observable<Todo[]>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.todos = this.store.select((state: State) => state.todo.entities );
  }

  addTodo(newTodo: string) {
    this.store.dispatch(new AddTodo(newTodo));
  }

  onToggle(todo: Todo) {
    this.store.dispatch(new ToggleTodo(todo));
  }

  onRemove(todo: Todo) {
    this.store.dispatch(new RemoveTodo(todo));
  }
}
