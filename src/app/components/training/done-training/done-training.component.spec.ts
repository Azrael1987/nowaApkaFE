import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneTrainingComponent } from './done-training.component';

describe('DoneTrainingComponent', () => {
  let component: DoneTrainingComponent;
  let fixture: ComponentFixture<DoneTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
