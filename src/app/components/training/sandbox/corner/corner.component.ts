import {
  Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';
import { Animal } from '../sandbox.component';

@Component({
  selector: 'app-corner',
  templateUrl: './corner.component.html',
  styleUrls: ['./corner.component.css']
})
export class CornerComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  @Input() inputText: string;
  @Input() inputAnimal: Animal;
  show = true;

  /**
   * Uruchamia się na początku przed ngOnInit
   * sprawdza czy zmieniły sie zbindowane pola komponentu.
   * Musi zmeinic się referencja
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChange - uruchomiony - (1)');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit - uruchomiony - (2)');
  }

  /**
   * uruchamiane przy kazdej zmianie, wywołaniu eventu itd. nawet reaguje na puste metody
   */
  ngDoCheck(): void {
    console.log('ngDoCheck - uruchomione! - (3)');

  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - uruchomione! - (4)');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked - uruchomiony! - (5)');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit - uruchomiony! - (6)');
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked - uruchomiony! (7)');
  }

  /**
   * Uruchamia się po każdej zmienie w widoku
   */
  ngOnDestroy(): void {
    console.log('OnDestroy - uruchomiony! (8)');

  }

  content(): void {
    this.show = !this.show;
  }

}


// 1:40 - #41
