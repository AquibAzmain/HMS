import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Server} from '../../utils/Server'
import { Notification } from '../../models/Notification';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class NotificationService {
  token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+this.token})
  };

  constructor(private http: HttpClient) { }

  getNotification() : Observable<Notification[]> {
    console.log(this.token);
    return this.http.get<Notification[]>(Server.API_ENDPOINT + 'notification',this.httpOptions);
    // return this.http.post<Notification>(Server.API_ENDPOINT +'getNotification/', {
    //   token: this.token
    // },this.httpOptions)
  }

  getNotificationSize() {
    return this.http.get(Server.API_ENDPOINT + 'notificationSize',this.httpOptions);
  }

  seenNotification(notification: Notification) {
    return this.http.post(Server.API_ENDPOINT +'seenNotification', {
      id: notification.id,
    },this.httpOptions)
  }

  sendDecisionOfNotification(notification: Notification, decision: string) {
    return this.http.post(Server.API_ENDPOINT +'decision', {
      id: notification.id,
      type: notification.type,
      decision: decision
    },this.httpOptions)
  }
}
