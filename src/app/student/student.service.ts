import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Server} from '../../utils/Server'
import { Student } from '../../models/Student';
import { Remark } from '../../models/Remark';
@Injectable()
export class StudentService {
  token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+this.token})
  };

  
  constructor(private http: HttpClient) { }

  getStudentList() : Observable<Student[]> {
    return this.http.get<Student[]>(Server.API_ENDPOINT +'student', this.httpOptions)
  } 

  addStudent(student:Student) {
    return this.http.post(Server.API_ENDPOINT +'student', JSON.stringify(student), this.httpOptions)
  }

  updateStudent(student:Student) {
    return this.http.put(Server.API_ENDPOINT +'student', JSON.stringify(student),this.httpOptions)
  }

  // id nei to ki dhore delete hobe dekhe nio
  deleteStudent(student:Student) {
    // let httpOptionsForDelete = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+this.token}),
    //   params: new HttpParams().set('registrationNumber', student.registrationNumber)
    // };
    // const params = new HttpParams().set('registrationNumber', student.registrationNumber);
    return this.http.delete(Server.API_ENDPOINT +'student/'+student.registrationNumber,this.httpOptions) //
  }

  getStudentByReg(registrationNumber) : Observable<Student> {
    return this.http.get<Student>(Server.API_ENDPOINT + 'student/'+registrationNumber,this.httpOptions);
  }

  searchSortStudent(student:Student) {
    return this.http.post(Server.API_ENDPOINT +'stu_search', JSON.stringify(student), this.httpOptions);
  }

  // getComment(registrationNumber): Observable<Remark>{
  //   return this.http.get<Remark>(Server.API_ENDPOINT + 'remark/'+registrationNumber,this.httpOptions);
  // }

  addComment(comment:Comment) {
    return this.http.post(Server.API_ENDPOINT +'remark', JSON.stringify(comment), this.httpOptions)
  }

  getCommentList(student) : Observable<Remark[]> {
    return this.http.get<Remark[]>(Server.API_ENDPOINT +'remark/'+student.registrationNumber);
  } 

  getProfile(){
    return this.http.get(Server.API_ENDPOINT +'profile', this.httpOptions);
  }

  getCleanUpData(){
    return this.http.get(Server.API_ENDPOINT +'clean_data', this.httpOptions);
  }

  // getNumberOfStudents() {
  //   return this.http.get(Server.API_ENDPOINT +'numberOfStudents', this.httpOptions)
  // }

  uploadFile(formData){
    return this.http.post(Server.API_ENDPOINT +'upload', formData, this.httpOptions)
  }
}
