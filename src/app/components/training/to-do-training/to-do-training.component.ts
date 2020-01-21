import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-training',
  templateUrl: './to-do-training.component.html',
  styleUrls: ['./to-do-training.component.css']
})
export class ToDoTrainingComponent implements OnInit {

  @Input() trainingsList = [];
  @Output() emitCompleteTrianing = new EventEmitter<string>();
  @Output() emitDeleteTraining = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  complete(task: string) {
    this.emitCompleteTrianing.emit(task);
  }
  delete(task: string) {
    this.emitDeleteTraining.emit(task);
  }
}
