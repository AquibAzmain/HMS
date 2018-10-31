import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Server} from '../../utils/Server'
import { Employee } from '../../models/Employee';

@Injectable()
export class EmployeeService {
  token = "mew";//localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','token': this.token})
  };

  constructor(private http: HttpClient) { }

  getEmployeeList() : Observable<Employee[]> {
    return this.http.get<Employee[]>(Server.API_ENDPOINT + 'employee');
  }

  addEmployee(employee:Employee) {
    this.http.post(Server.API_ENDPOINT +'employee', JSON.stringify(employee), this.httpOptions)
  }

  updateEmployee(employee:Employee) {
    this.http.put(Server.API_ENDPOINT +'employee', JSON.stringify(employee),this.httpOptions)
  }

  deleteEmployee(employee:Employee) {
    this.http.delete(Server.API_ENDPOINT +'employee/'+employee.id,this.httpOptions)
  }
}
