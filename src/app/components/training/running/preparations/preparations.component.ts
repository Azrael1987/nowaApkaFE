import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preparations',
  templateUrl: './preparations.component.html',
  styleUrls: ['./preparations.component.css']
})
export class PreparationsComponent implements OnInit {

  sunnyFont = 'orange';
  rainnigFont = 'grey';
  today = new Date();
  dayOfweek = 'wtorek';
  date = new Date('2019-11-26');
  kind = 'mieszany';
  dystans = 13.110;
  unit = 'km';
  timeInMin = 69;
  timeDesc = '';
  todayWeather = new Weather(false, true, this.date);
  daysOfWeek = ['pon', 'wt', 'sr', 'czw', 'pt', 'sob', 'nd'];
  isShow = false;
  isVisible = true;
  isHidden = false;

  inboundClick = true;
  outboundClick = true;

  weatherSchedule = new Array<Weather>(); // lista z prognozami pogody

  weatherScheduleForNextWeek = new Array<Weather>();

  constructor() {
    this.weatherSchedule.push(
      new Weather(true, false, new Date('2019-11-20')),
      new Weather(false, false, new Date('2019-11-21')),
      new Weather(true, true, new Date('2019-11-22')),
      new Weather(false, false, new Date('2019-11-24')),
      new Weather(true, true, new Date('2019-11-25')),
    );
  }

  ngOnInit() {
    this.showResult();
  }
  showResult() {
    let tempH = Math.floor(this.timeInMin / 60);
    let tempMin = this.timeInMin - tempH * 60;
    return  tempH + ' h ' + tempMin + ' min.';
  }
  // tu napisze metode do przeliczania czasu i wyswietlania

  showWeather() {
    this.isVisible = !this.isVisible;
  }

  hidden() {
    this.isHidden = !this.isHidden;
  }
}

class Weather {
  constructor(public isRain: boolean, public isWind: boolean, public date: Date) {
  }
}
