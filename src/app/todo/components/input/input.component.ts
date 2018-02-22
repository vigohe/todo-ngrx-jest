import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() add = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  addTodo(todoText: String) {
    this.add.emit(todoText);
  }

}
