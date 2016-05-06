import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'input-bar',
  templateUrl: 'input-bar.component.html',
  styleUrls: ['input-bar.component.css']
})
export class InputBarComponent implements OnInit {

  @Output() sent: EventEmitter<any> = new EventEmitter();
  
  constructor() {}

  ngOnInit() {}
  
  onSent($event, newMessage) {
    this.sent.next(newMessage.value);
    newMessage.value = '';
  }

}
