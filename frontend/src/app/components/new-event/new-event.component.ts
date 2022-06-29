import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  event: any;
  user: any
  description: any;
  start: any;
  finish: any;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  save(): void{
    const event = {
      user: {
        id: "f35695d9-066b-448e-9cbd-bc087e6f33ee"
      },
      description: this.description,
      start: this.start,
      finish: this.finish
    }
    console.log(event);
    this.eventService.create(event)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      )
  }

}