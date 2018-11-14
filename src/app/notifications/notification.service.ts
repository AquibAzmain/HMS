import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Server} from '../../utils/Server'
import { Notification } from '../../models/Notification';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class NotificationService {

  constructor(private http: HttpClient) { }

  getNotification() : Observable<Notification[]> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+ localStorage.getItem('token')})
    };
    return this.http.get<Notification[]>(Server.API_ENDPOINT + 'notification',httpOptions);
    // return this.http.post<Notification>(Server.API_ENDPOINT +'getNotification/', {
    //   token: this.token
    // },this.httpOptions)
  }

  getNotificationSize() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+ localStorage.getItem('token')})
    };
    return this.http.get(Server.API_ENDPOINT + 'notificationsize',httpOptions);
  }

  seenNotification(notification: Notification) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+ localStorage.getItem('token')})
    };
    return this.http.post(Server.API_ENDPOINT +'seenNotification', {
      id: notification.id,
    },httpOptions)
  }

  sendDecisionOfNotification(notification: Notification, decision: string) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+ localStorage.getItem('token')})
    };
    return this.http.post(Server.API_ENDPOINT +'decision', {
      id: notification.id,
      type: notification.type,
      decision: decision
    },httpOptions)
  }
}
