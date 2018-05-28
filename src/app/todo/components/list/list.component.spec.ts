import {ListComponent} from './list.component';
import {ItemComponent} from '../item/item.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ ListComponent, ItemComponent]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compile', () => {
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
