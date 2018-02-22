import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { Store, StoreModule } from '@ngrx/store';
import { InputComponent } from '../../components/input/input.component';
import { ListComponent } from '../../components/list/list.component';
import { AddTodo, ToggleTodo, RemoveTodo } from '../../actions/todo.actions';
import { ItemComponent } from '../../components/item/item.component';
import { reducers, metaReducers } from '../../../reducers';
import { Todo } from '../../models/todo';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot(reducers, { metaReducers }) ],
      declarations: [ TodoComponent, ListComponent, InputComponent, ItemComponent]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compile', () => {
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });


  it('should dispatch a todo.Add action on input', () => {
    const $event: string = 'GO TO SLEEP';
    const action = new AddTodo($event);

    component.addTodo($event);

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch a todo.Toggle action onToggle', () => {
    const $event: Todo = {
      id: 1,
      text: 'asdf',
      complete: true
    };
    const action = new ToggleTodo($event);
    component.onToggle($event);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch a todo.Remove action onRemove', () => {
    const $event: Todo = {
      id: 1,
      text: 'asdf',
      complete: true
    };
    const action = new RemoveTodo($event);
    component.onRemove($event);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

});
