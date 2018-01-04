import { Component, OnInit,ViewChild  } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
declare var $: any;
@Component({
  selector: 'pc-calendario',
  templateUrl: './calendario.component.html',
  styleUrls:['./calendario.component.css']
})
export class PCCalendarioComponent implements OnInit {
  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor() { 
   
  }
  
  ngOnInit() {

    this.calendarOptions = {
      locale: 'es-us',
      editable: true,
      eventLimit: false,
      
      header: {
        left:   'title',
        center: '',
        right:  'today prev,next'
      },
      events: [{
        title: 'Matematicas',
        start: '2018-01-01'
      }]
    };
  }
}
