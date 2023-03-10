import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [ngClass]="{fadeOut: displayNotification}">
      <p>This Website use cookies to provide better user experience</p>
      <div class="close">
        <button class="text-danger" (click)="closeNotification()">X</button>
      </div>
    </div>`,
  styles: [
    "div{margin:10px 0px; padding:10px 20px; text-align:center}",
    "p{font-size:14px;}",
    ".close{float:right;margin-right:-30px; margin-top:-48px; text-align:center;}",
    "button{border:none; font-size:26px;}",
    ".fadeOut{visibility:hidden; opacity:0; transition:visibility 0s 2s, opacity 2s linear;}"
  ]
})
export class NotificationComponent {
  displayNotification:boolean=false

  closeNotification(){
    return this.displayNotification=true;
  }
}
