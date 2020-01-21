import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-swimming',
  templateUrl: './swimming.component.html',
  styleUrls: ['./swimming.component.css']
})
export class SwimmingComponent implements OnInit {

  @Input() tasks = []; // zasilany z trainging.commponent
  @Input() things = ['taks1', 'taks2']; // jesli input miałby zasilać tablice ktora juz ma elementy do nie wyswietli nic

  @Output()
  eventTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  select(task) {
    this.eventTask.emit(task);
  }

}
