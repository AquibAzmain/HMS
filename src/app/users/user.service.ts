import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Server} from '../../utils/Server'

@Injectable()
export class UserService {

  token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer '+ this.token})
  };

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(Server.API_ENDPOINT + 'users', this.httpOptions);
  }

  createUser(userInfo){
    return this.http.post(Server.API_ENDPOINT + 'register', userInfo, this.httpOptions);
  }

  editUserRole(userInfo){
    return this.http.put(Server.API_ENDPOINT + "change_role", userInfo, this.httpOptions);
  }

  editUserStatus(userInfo){
    return this.http.put(Server.API_ENDPOINT + "change_status", userInfo, this.httpOptions);
  }

}
