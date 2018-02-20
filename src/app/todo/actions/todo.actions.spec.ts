import { AddTodo, ToggleTodo, RemoveTodo, TodoActions } from './todo.actions';

describe('AddTodo', () => {
  it('should set payload to a Todo', () => {
    const action = new AddTodo('GO TO WORK!');
    expect(action.type).toMatchSnapshot();
    expect(action.payload).toMatchSnapshot();
  });

});
