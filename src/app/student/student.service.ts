import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Server} from '../../utils/Server'
import { Student } from '../../models/Student';
@Injectable()
export class StudentService {
  token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+this.token})
  };
  constructor(private http: HttpClient) { }

  getStudentList() : Observable<Student> {
    return this.http.get<Student>(Server.API_ENDPOINT +'student')
  } 

  addStudent(student:Student) {
    return this.http.post(Server.API_ENDPOINT +'student', JSON.stringify(student), this.httpOptions)
  }

  updateStudent(student:Student) {
    return this.http.put(Server.API_ENDPOINT +'student', JSON.stringify(student),this.httpOptions)
  }

  // id nei to ki dhore delete hobe dekhe nio
  deleteStudent(student:Student) {
    return this.http.delete(Server.API_ENDPOINT +'student/'+student.registrationNumber,this.httpOptions) //
  }

  getStudentByReg(registrationNumber) : Observable<Student> {
    return this.http.get<Student>(Server.API_ENDPOINT + 'student/'+registrationNumber,this.httpOptions);
  }

  searchSortStudent(student:Student) {
    return this.http.post(Server.API_ENDPOINT +'student_search', JSON.stringify(student), this.httpOptions);
  }

}
