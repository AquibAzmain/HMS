import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Server} from '../../utils/Server'

@Injectable()
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getUsers(token){
    return this.http.post(Server.API_ENDPOINT + 'users', token, this.httpOptions);
  }

}
