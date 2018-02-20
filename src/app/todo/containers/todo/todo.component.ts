import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../reducers/todo.reducer';
import { AddTodo } from '../../actions/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.store.dispatch(new AddTodo('HOLA MUNDO'));
  }

}
