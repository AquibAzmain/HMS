import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Server} from '../../utils/Server'
import { Student } from '../../models/Student';
@Injectable()
export class DashboardService {
  token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+this.token})
  };

  constructor(private http: HttpClient) { }

  getAlumniStudentList() : Observable<Student[]> {
    return this.http.get<Student[]>(Server.API_ENDPOINT + 'clean_data');
  }

}
