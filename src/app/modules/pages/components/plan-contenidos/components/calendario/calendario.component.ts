import * as moment from 'moment';
import { Component, OnInit, ViewChild } from '@angular/core';
declare var $: any;
@Component({
  selector: 'pc-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class PCCalendarioComponent implements OnInit {

  constructor() {}
  ngOnInit() {
    var dragged = null;
    initializeExternalEvents();
    var calendar = $('.calendar').fullCalendar({
      weekends: false, // will hide Saturdays and Sundays
      locale: "es-us",
      dayClick: function (e) {
        let myMoment: moment.Moment = moment(e._i);
        console.log(myMoment);
      },
      droppable: true,
      editable: true,
      dragRevertDuration: 0,
      drop: function() {
        makeEventsDraggable();
      },
      eventDragStop: function( event, jsEvent, ui, view ) {
        makeEventsDraggable();
      },eventResize: function( event, delta, revertFunc, jsEvent, ui, view ) {
        makeEventsDraggable();
    },
    viewRender: function() {
        makeEventsDraggable();
    },eventDragStart:function( event, jsEvent, ui, view ) {
      dragged = [ calendar, event ];
     }
    });
   
    $('#external-events-listing').droppable({
      drop: function( event, ui ) { 
       
          if ( dragged ) {
            var event = dragged[1];
            dragged[0].fullCalendar('removeEvents',event._id);
            var el = $( "<div class='fc-event'>" ).appendTo( this ).text( event.title );
            el.draggable({
                zIndex: 999,
                revert: true, 
                revertDuration: 0 
            });
            el.data('event', { title: event.title, id :event.id, stick: true });
            dragged = null;
            makeEventsDraggable();
          }
      }
  });
  }
   
}
function makeEventsDraggable() { 
  $( ".fc-draggable" ).draggable({
      zIndex: 999,
      revert: true,      // will cause the event to go back to its
      revertDuration: false  //  original position after the drag
  });
}
function initializeExternalEvents(){
  $('.external-events .fc-event').each(function() {
    // store data so the calendar knows to render an event upon drop
    $(this).data('event', {
        title: $.trim($(this).text()), // use the element's text as the event title
        stick: true // maintain when user navigates (see docs on the renderEvent method)
    });

    // make the event draggable using jQuery UI
    $(this).draggable({
        zIndex: 999,
        revert: true,      // will cause the event to go back to its
        revertDuration: 0  //  original position after the drag
    });

});
}


        