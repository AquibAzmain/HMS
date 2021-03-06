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
    this.notificationService.getNotification()
    .subscribe((response) => { 
      console.log(response);
      this.notifications = response;
    },
    (err) => {
      console.log(err)
    })
    // let notification: Notification = new Notification();
    // notification.text = "Approve account?";
    // notification.type = 'decision';
    // this.notifications.push(notification);

    // let notification2: Notification = new Notification();
    // notification2.text = "room 23 is overflow";
    // notification2.type = 'text';
    // this.notifications.push(notification2);
    
    // setInterval(() => {
    //   
    // }, 5000);
  }

  deleteNotification(notification: Notification) {
    let index = this.notifications.indexOf(notification);
    this.notifications.splice(index,1);
  }

  seenNotification(notification: Notification) {
    this.notificationService.seenNotification(notification)
    .subscribe((response) => { 
      this.deleteNotification(notification);
    },
    (err) => {
      console.log(err)
    })
  }

  acceptNotification(notification: Notification) {
    this.notificationService.sendDecisionOfNotification(notification,"approved")
    .subscribe((response) => { 
      this.deleteNotification(notification);
    },
    (err) => {
      console.log(err)
    });
  }

  rejectNotification(notification: Notification) {
    this.notificationService.sendDecisionOfNotification(notification,"declined")
    .subscribe((response) => { 
      this.deleteNotification(notification);
    },
    (err) => {
      console.log(err)
    })
  }
}
