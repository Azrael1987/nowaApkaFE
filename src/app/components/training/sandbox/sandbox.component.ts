import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  title = 'proces twórczy';
  animal = new Animal('Jerry');
  show = true;

  constructor() { }

  changeTitle() {
    this.title = 'edukacja';
  }

  changeAnimal() {
    // Onchange tego nie wykryje, bo nie ma zmiany referecji tylko  property
    // DoCheck to wykryje
     this.animal.name = 'Bob';
    // nowy obiekt i nowa referencja czyli OnChange zareaguje
    // DoCheck to wykryje
    // this.animal = new Animal('Tom'); // ?
  }

  nothing() {

  }

  destroy() {
    this.show = !this.show;
  }

  ngOnInit() {
  }

}

export class Animal {
  constructor(public name: string) {
  }
}
