import { Component, Input, OnInit } from '@angular/core';

export enum MessageTypes {
  Standard,
  Success,
  Error,
  Warning,
  Default
}

@Component({
  selector: 'app-message',
  templateUrl: './app-message.component.html',
  styleUrls: ['./app-message.component.css']
})
export class AppMessageComponent implements OnInit {

  @Input() type = MessageTypes.Default;
  private messageTypes = MessageTypes;

  constructor() { }

  ngOnInit(): void {
  }
}
