import { Component, OnInit } from '@angular/core';
import {Event} from 'src/app/model/event';
import {EventService} from 'src/app/Services/event.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  eventob: Event[] =[];
  constructor(private eventservice:EventService) { }
  funcDelete(e:Event){
    this.eventservice.funcDelete(e);
  }
  addEvent(eventName: string, desc: string, speaker: string) {
    this.eventservice.addEvent(eventName, desc, speaker);
  }
  ngOnInit(): void {
    this.eventob = this.eventservice.getEvents();
  }

}
