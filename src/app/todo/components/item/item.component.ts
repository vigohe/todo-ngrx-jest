import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() toggle = new EventEmitter<Todo>();
  @Output() remove = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  onChecked(todo: Todo) {
    this.toggle.emit(todo);
  }

  onRemove(todo: Todo) {
    this.remove.emit(todo);
  }

}
