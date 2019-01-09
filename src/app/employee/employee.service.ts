import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Server} from '../../utils/Server'
import { Employee } from '../../models/Employee';
import { Leave } from '../../models/Leave';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployeeList() : Observable<Employee[]> {
    return this.http.get<Employee[]>(Server.API_ENDPOINT + 'employee');
  }

  addEmployee(employee:Employee) : Observable<Employee>{
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+ localStorage.getItem('token')})
    };
    return this.http.post<Employee>(Server.API_ENDPOINT +'employee', JSON.stringify(employee), httpOptions);
  }

  updateEmployee(employee:Employee) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+ localStorage.getItem('token')})
    };
    console.log(JSON.stringify(employee));
    return this.http.put(Server.API_ENDPOINT +'employee', JSON.stringify(employee),httpOptions);
  }

  deleteEmployee(employee:Employee) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+ localStorage.getItem('token')})
    };
    return this.http.delete(Server.API_ENDPOINT +'employee/'+employee.id,httpOptions);
  }

  getEmployeeById(employeeId) : Observable<Employee> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+ localStorage.getItem('token')})
    };
    return this.http.get<Employee>(Server.API_ENDPOINT + 'employee/'+employeeId,httpOptions);
  }

  getLeaveList(employeeId) : Observable<Leave[]> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+ localStorage.getItem('token')})
    };
    return this.http.get<Leave[]>(Server.API_ENDPOINT + 'leave/'+employeeId,httpOptions);
  }

  getNumberofSickLeaves(employeeId) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+ localStorage.getItem('token')})
    };
    return this.http.post(Server.API_ENDPOINT +'leaveyearly', {
      employee_id: employeeId,
      category: "sick"
    },httpOptions)
  }

  getNumberofCasualLeaves(employeeId) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+ localStorage.getItem('token')})
    };
    return this.http.post(Server.API_ENDPOINT +'leaveyearly', {
      employee_id: employeeId,
      category: "casual"
    },httpOptions)
  }

  addLeave(leave:Leave) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+ localStorage.getItem('token')})
    };
    return this.http.post(Server.API_ENDPOINT +'leave', JSON.stringify(leave), httpOptions);
  }

  updateLeave(leave:Leave) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+ localStorage.getItem('token')})
    };
    return this.http.put(Server.API_ENDPOINT +'leave', JSON.stringify(leave),httpOptions);
  }

  searchSortEmployee(employeeSearch:Employee) : Observable<Employee[]>{
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+ localStorage.getItem('token')})
    };
    return this.http.post<Employee[]>(Server.API_ENDPOINT +'employee_search', JSON.stringify(employeeSearch), httpOptions);
  }
}
