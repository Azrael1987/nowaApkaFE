import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent implements OnInit {

  newTask: string;
  @Output() emitAddTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.emitAddTask.emit(this.newTask);
    this.newTask = '';
  }

}
