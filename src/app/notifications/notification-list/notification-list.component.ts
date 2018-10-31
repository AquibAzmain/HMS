import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Notification } from '../../../models/Notification';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  notifications: Notification[] = [];
 
  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    // this.notificationService.getNotification()
    // .subscribe((response) => { 
    //   console.log(response);
    // });
    // let notification: Notification = new Notification();
    // notification.text = "hi";
    // notification.type = 'text';
    // this.notifications.push(notification);
    
    // setInterval(() => {
    //   
    // }, 5000);
  }

  deleteNotification(notification: Notification) {
    let index = this.notifications.indexOf(notification);
    this.notifications.splice(index,1);
  }

  seenNotification(notification: Notification) {
    this.deleteNotification(notification);
  }

  acceptNotification(notification: Notification) {
    this.deleteNotification(notification);
    this.notificationService.sendDecisionOfNotification(notification,"accept");
  }

  rejectNotification(notification: Notification) {
    this.deleteNotification(notification);
    this.notificationService.sendDecisionOfNotification(notification,"reject");
  }
}
