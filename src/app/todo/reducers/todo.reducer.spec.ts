import { reducer, initialState } from "./todo.reducer";
import {
  TodoActionTypes,
  AddTodo,
  RemoveTodo,
  ToggleTodo
} from "../actions/todo.actions";

describe("Todo Reducer", () => {

  const state = {
    entities: [
      {
        id: 1,
        text: "READ A BOOK",
        complete: false
      },
      {
        id: 2,
        text: "WATCH A MOVIE",
        complete: false
      }
    ]
  };

  describe("unknown action", () => {
    it("should return the initial state", () => {
      const action = {} as any;

      const result = reducer(undefined, action);

      expect(result).toBe(initialState);
    });
  });

  describe("AddTodo action", () => {
    it("should return a new Todo", () => {
      const action = new AddTodo("NEW TODO");
      const result = reducer(initialState, action);
      expect(result.entities).toHaveLength(1);
      expect(result.entities[0].text).toBe("NEW TODO");
    });
  });

  describe("RemoveTodo action", () => {
    it("should remove a Todo", () => {
      const action = new RemoveTodo(state.entities[0]);

      const result = reducer(state, action);
      expect(result.entities).toHaveLength(1);
      expect(result.entities).toMatchSnapshot();
    });
  });

  describe("ToggleTodo action", () => {
    it("should toggle a Todo", () => {
      const action = new ToggleTodo(state.entities[1]);
      const result = reducer(state, action);
      expect(result.entities[1].complete).toBe(true);
      expect(result.entities).toMatchSnapshot();
    });
  });
});
