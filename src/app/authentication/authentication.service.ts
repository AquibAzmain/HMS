import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Server} from '../../utils/Server'

@Injectable()
export class AuthenticationService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  
  constructor(private http: HttpClient) { }

  getlogin(loginData){
    return this.http.post(Server.API_ENDPOINT +'login', loginData, this.httpOptions);
  }

}
