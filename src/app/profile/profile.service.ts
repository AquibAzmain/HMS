import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Server} from '../../utils/Server'

@Injectable()
export class ProfileService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  
  constructor(private http: HttpClient) { }

  getProfile(token){
    return this.http.post(Server.API_ENDPOINT +'login', token, this.httpOptions);
  }

  editProfile(user_info){
    return this.http.put(Server.API_ENDPOINT + 'edit_profile', user_info, this.httpOptions);
  }

}
