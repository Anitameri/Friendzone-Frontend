import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  modalRef?: BsModalRef;

  presentDays: number = 0;
  absentDays: number = 0;

  events: any = [
    { title: 'Present', date: '2022-07-28', color: '#0000FF'},
    { title: 'Absent', date: '2022-07-29', color: '#0000FF'},
    { title: 'Present', date: '2022-07-30', color: '#FF0000'}
  ];

  title:any;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: this.events,
    eventClick: this.handleDateClick.bind(this),
  };

  config = {
    animated:true
  }
  @ViewChild('template') template!:string;
  start: any;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
this.events.forEach((e: { [x: string]: string; }) => {
  if (e["title"] == 'Present') {
    this.presentDays++;
  } else {
    this.absentDays++
  }
});

  console.log("Present " + this.presentDays);
  console.log("Absent " + this.absentDays)

  }

  handleDateClick(arg:any) {
    console.log(arg);
    console.log(arg.event._def.title);
    this.title = arg.event._def.title;
    this.start = arg.event.start;
    this.modalRef = this.modalService.show(this.template, this.config);
  }

}
