import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Server} from '../../utils/Server'
import { Student } from '../../models/Student';
import { Remark } from '../../models/Remark';
import { ResidentialFee } from '../../models/ResidentialFee';
import { User } from '../../models/User';
import { StudentClub } from '../../models/StudentClub';
@Injectable()
export class StudentService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+localStorage.getItem('token')})
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

  getCommentList(registrationNumber) : Observable<Remark[]> {
    return this.http.get<Remark[]>(Server.API_ENDPOINT +'remark/'+registrationNumber);
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
    console.log(formData)
    return this.http.post(Server.API_ENDPOINT +'upload', formData)
  }

  getResidenceFeeStatusData(registrationNumber): Observable<ResidentialFee[]>  {
    return this.http.get<ResidentialFee[]>(Server.API_ENDPOINT +'residence_fee/'+registrationNumber, this.httpOptions)
  }

  addResidentialFeeStatus(residence_fee: ResidentialFee) {
    return this.http.post(Server.API_ENDPOINT +'residence_fee', JSON.stringify(residence_fee), this.httpOptions)
  }

  updateResidentialFeeStatus(residence_fee: ResidentialFee) {
    return this.http.put(Server.API_ENDPOINT +'residence_fee', JSON.stringify(residence_fee),this.httpOptions)
  }

  deleteResidentialFeeStatus(residence_fee: ResidentialFee) {
    return this.http.delete(Server.API_ENDPOINT +'residence_fee/'+residence_fee.registrationNumber+'/'+residence_fee.year,this.httpOptions) //
  }

  getUserById(id) : Observable<User>{
    return this.http.get<User>(Server.API_ENDPOINT + 'user/'+id,this.httpOptions);
  }

  getClubData(registrationNumber): Observable<StudentClub[]>  {
    return this.http.get<StudentClub[]>(Server.API_ENDPOINT +'student_club/'+registrationNumber, this.httpOptions)
  }

  getUniqueClubList() {
    return this.http.get(Server.API_ENDPOINT +'student_club_unique', this.httpOptions)
  } 

  addClub(club: StudentClub) {
    return this.http.post(Server.API_ENDPOINT +'student_club', JSON.stringify(club), this.httpOptions)
  }

  updateClub(club: StudentClub) {
    return this.http.put(Server.API_ENDPOINT +'student_club', JSON.stringify(club),this.httpOptions)
  }

  deleteClub(club: StudentClub) {
    return this.http.delete(Server.API_ENDPOINT +'student_club/'+club.id,this.httpOptions) 
  }
}
