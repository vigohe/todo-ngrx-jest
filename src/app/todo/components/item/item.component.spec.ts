import {ItemComponent} from './item.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ ItemComponent]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.todo = {id: 100, text: "TODO TEXT", complete: true};

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
