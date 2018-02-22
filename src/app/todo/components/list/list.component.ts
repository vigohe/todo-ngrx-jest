import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() toggle = new EventEmitter<Todo>();
  @Output() remove = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  onToggle(todo: Todo) {
    this.toggle.emit(todo);
  }

  onRemove(todo: Todo) {
    this.remove.emit(todo);
  }

}
