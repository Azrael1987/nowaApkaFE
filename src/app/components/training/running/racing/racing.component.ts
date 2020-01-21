import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-racing',
  templateUrl: './racing.component.html',
  styleUrls: ['./racing.component.css']
})

  // @NgModule({})
export class RacingComponent implements OnInit {

  inputText = 'Pole tekstowe';
  inputText2 = '';
  maxLength = 6;
  colorClass = 'color1';
  logoUrl = '';
  isDisable = true;

  profession = 'biegacz';
  skill = 'sprint';

  constructor() {
    // setTimeout(() => {
    //   this.isDisable = false;
    // }, 3000);
  }

  change() {
    this.inputText = 'zmiana tekstu i koloru';
    this.maxLength = 8;
    this.colorClass = 'color2';
    this.logoUrl =
      'https://royalcanin.pl/blog/wp-content/uploads/2018/01/Kot-w-domu-4-rzeczy-kt%C3%B3rych-mo%C5%BCe-Ci%C4%99-nauczy%C4%87-950x633.jpeg';
  }

  onFocus() {
    this.colorClass = 'color2';
    this.isDisable = true;
  }

  onCklick(event) {
    console.log(event);
  }

  onMouseMove(event) {
    console.log('x: ' + event.clientX + ' y: ' + event.clientY);
  }

  onPaste() {
    this.inputText2 = 'nie wklejaj , wpisz ręcznie';
  }

  change2() {
    this.isDisable = false;
  }

  ngOnInit() {
  }

}
