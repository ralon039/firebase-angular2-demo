import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'flexchat-message',
  templateUrl: 'flexchat-message.component.html',
  styleUrls: ['flexchat-message.component.css']
})
export class FlexchatMessageComponent implements OnInit {

  @Input() message: any;
  
  constructor() {}

  ngOnInit() {}

}
