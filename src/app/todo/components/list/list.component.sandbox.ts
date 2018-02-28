import { sandboxOf } from 'angular-playground';
import { ListComponent } from './list.component';
import { Todo } from '../../models/todo';
import { ItemComponent } from '../item/item.component';

export default sandboxOf(ListComponent,{declarations: [ItemComponent]})
  .add('with simple text', {
    template: `<app-list [todos]="todos"></app-list>`,
    context: {
      todos: [
        {'id': 1, 'text': 'GO TO WORK', 'complete': true},
        {'id': 2, 'text': 'LAUNCH', 'complete': false}]
    }
  });
