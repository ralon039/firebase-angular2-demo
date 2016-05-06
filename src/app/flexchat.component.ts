import { Component } from '@angular/core';
import { FlexchatMessageComponent } from './flexchat-message'
import { InputBarComponent } from './input-bar';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Component({
  moduleId: module.id,
  selector: 'flexchat-app',
  templateUrl: 'flexchat.component.html',
  styleUrls: ['flexchat.component.css'],
  directives: [
    FlexchatMessageComponent, 
    InputBarComponent
  ]
})
export class FlexchatAppComponent {
  
  messages: FirebaseListObservable<any[]>;
  limitSubject = new Subject<number>();
  
  constructor(af: AngularFire) {
    this.messages = af.database.list('/messages', {
      query: {
        limitToLast: this.limitSubject
      }
    });
  }
  
  addMessage(text) {
    this.messages.push({ text: text });
  }
  
  changeLimit(limit) {
    this.limitSubject.next(parseInt(limit, 10));
  }
  
}
