import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import decode from 'jwt-decode';
import { UserService } from './../../services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEventComponent } from '../modalEvent/modalEvent.component';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events:any;

  constructor(
    private location: Location,
    private eventService: EventService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.findAllEvents();
  }

  findAllEvents(): void {
    const token = localStorage.getItem('token');
    const tokenPayload : any = decode(token!);
    this.userService.findOne(tokenPayload.sub)
      .subscribe(
        data => {
          this.events = data.events;
        },
        error => {
          console.log(error);
        }
      )
  }

  editEvent(id: number): void{
    this.router.navigate([`/edit-event/${id}`], {relativeTo: this.activatedRoute})
  }

  openModal(event: any){
    const modalRef = this.modalService.open(ModalEventComponent)
    modalRef.componentInstance.event = event
  }

}
