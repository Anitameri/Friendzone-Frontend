import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/interface/event';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  events:Event[]=[];

  constructor(private eventService: EventService, private router:Router) { }

  ngOnInit(): void {
    this.eventService.getEventsList().subscribe((events)=>(this.events=events));
    console.log(this.events);
    
  } 

  deleteEvent(){
    if(this.eventService.oneEvent.id)
    this.eventService.deleteEvent(this.eventService.oneEvent.id).subscribe().add(()=>{this.router.navigate([''])});

  }

}