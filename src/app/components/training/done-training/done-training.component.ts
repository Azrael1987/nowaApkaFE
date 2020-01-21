import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-done-training',
  templateUrl: './done-training.component.html',
  styleUrls: ['./done-training.component.css']
})
export class DoneTrainingComponent implements OnInit {

  @Input() doneTasksList: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

}
