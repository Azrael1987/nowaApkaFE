import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoTrainingComponent } from './to-do-training.component';

describe('ToDoTrainingComponent', () => {
  let component: ToDoTrainingComponent;
  let fixture: ComponentFixture<ToDoTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
