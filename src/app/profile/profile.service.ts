import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Server} from '../../utils/Server'

@Injectable()
export class ProfileService {
  
  token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer '+ this.token})
  };
  
  constructor(private http: HttpClient) { }

  getProfile(){
    return this.http.get(Server.API_ENDPOINT +'profile', this.httpOptions);
  }

  editProfile(user_info){
    return this.http.put(Server.API_ENDPOINT + 'profile', user_info, this.httpOptions);
  }

  changePassword(passwords){
    return this.http.post(Server.API_ENDPOINT + 'change_password', passwords, this.httpOptions);
  }

}
