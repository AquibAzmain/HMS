import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Server} from '../../utils/Server'
import { Student } from '../../models/Student';
@Injectable()
export class StudentService {
  token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { }

  getStudent() : Observable<Student> {
    return this.http.get<Student>(Server.API_ENDPOINT +'student')
  } 
}
