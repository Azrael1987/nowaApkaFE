import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  trainingsList: Array<string> = [];
  doneTasksList: Array<string> = [];
  tasksList2 = ['rozgrzewka', 'skok do wody', '20 długości basenu', 'rozciąganie'];

  constructor() { }

  ngOnInit() {
  }

  add(task: string) {
    this.trainingsList.push(task);
    console.log(this.trainingsList);
  }

  complete(task: string) {
    this.doneTasksList.push(task);
    this.delete(task);
    console.log(this.trainingsList);
  }

  delete(task: string) {
    this.trainingsList = this.trainingsList.filter(a => a !== task);
  }

  selected(task: string): void {
    console.log(task);
  }

}
