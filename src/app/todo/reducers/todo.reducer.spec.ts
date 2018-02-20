import { reducer, initialState } from './todo.reducer';
import { TodoActionTypes, AddTodo, RemoveTodo } from '../actions/todo.actions';

describe('Todo Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);

      expect(result).toBe(initialState);
    });
  });

  describe('AddTodo action', () => {
    it('should return a new Todo', () => {
      const action = new AddTodo('NEW TODO');
      const result = reducer(initialState, action);
      expect(result.entitites).toHaveLength(1);
      expect(result.entitites[0].text).toBe('NEW TODO');
    });
  });
});

