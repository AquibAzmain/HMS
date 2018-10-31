import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Server} from '../../utils/Server'
import { Notification } from '../../models/Notification';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class NotificationService {
  token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','token': this.token})
  };

  constructor(private http: HttpClient) { }

  getNotification() : Observable<Notification[]> {
    return this.http.get<Notification[]>(Server.API_ENDPOINT + 'notification/');
    // return this.http.post<Notification>(Server.API_ENDPOINT +'getNotification/', {
    //   token: this.token
    // },this.httpOptions)
  }

  getNotificationSize() {
    return this.http.get(Server.API_ENDPOINT + 'notificationSize/');
  }

  seenNotification(notification: Notification) {
    this.http.post(Server.API_ENDPOINT +'seenNotification/', {
      id: notification.id
    },this.httpOptions)
  }

  sendDecisionOfNotification(notification: Notification, decision: string) {
    this.http.put(Server.API_ENDPOINT +'sendDecisionOfNotification/', {
      id: notification.id,
      decision: decision
    },this.httpOptions)
  }
}
