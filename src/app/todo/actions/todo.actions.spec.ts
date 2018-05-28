import { AddTodo, ToggleTodo, RemoveTodo, TodoActions } from './todo.actions';
import { Todo } from '../models/todo';

describe('Actions', () => {
  it('should set payload to a Todo', () => {
    const action = new AddTodo('GO TO WORK!');
    expect(action.type).toMatchSnapshot();
    expect(action.payload).toMatchSnapshot();
  });

  it('should set payload remove Todo', () => {
    const todo : Todo = {id: 100, text: "", complete: false};
    const action = new RemoveTodo(todo);
    expect(action.type).toMatchSnapshot();
    expect(action.payload).toMatchSnapshot();
  });

  it('should set payload toggle Todo', () => {
    const todo : Todo = {id: 100, text: "", complete: false};
    const action = new ToggleTodo(todo);
    expect(action.type).toMatchSnapshot();
    expect(action.payload).toMatchSnapshot();
  });

});
