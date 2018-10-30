import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Server} from '../../utils/Server'
import { Notification } from '../../models/Notification';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class NotificationService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getNotification() : Observable<Notification> {
    return this.http.post<Notification>(Server.API_ENDPOINT +'getNotification/', {
      token: "mew"
    },this.httpOptions)
  }

  seenNotification(notification: Notification) {
    this.http.post(Server.API_ENDPOINT +'seenNotification/', {
      token: "mew",
      id: notification.id
    },this.httpOptions)
  }

  sendDecisionOfNotification(notification: Notification, decision: string) {
    this.http.post(Server.API_ENDPOINT +'sendDecisionOfNotification/', {
      token: "mew",
      id: notification.id,
      decision: decision
    },this.httpOptions)
  }

  hi () {
    return "hi";
  }
}
