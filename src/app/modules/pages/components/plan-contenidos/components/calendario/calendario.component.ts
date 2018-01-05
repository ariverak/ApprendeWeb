import { Component, OnInit,ViewChild  } from '@angular/core';
import * as moment from 'moment';
declare var $: any;
@Component({
  selector: 'pc-calendario',
  templateUrl: './calendario.component.html',
  styleUrls:['./calendario.component.css']
})
export class PCCalendarioComponent implements OnInit {
  
  constructor() { 
  }
  
  ngOnInit() {
    $('#calendar').fullCalendar({
      weekends: false, // will hide Saturdays and Sundays
      locale: "es-us",
      dayClick: function(e) {
        let myMoment:moment.Moment = moment(e._i);
        console.log(myMoment);
      }
  });
  }
}
