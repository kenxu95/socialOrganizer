import { Component } from '@angular/core';
import { NKDatetime } from 'ng2-datetime/ng2-datetime';

@Component({
  selector: 'my-app',
  template: '<datetime [(ngModel)]="date"></datetime>',
  directives: [NKDatetime]
})
export class AppComponent {
  date: Date = new Date();
}
