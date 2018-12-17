import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Server} from '../../utils/Server'
import { Block } from '../../models/Block';
import { Room } from '../../models/Room';
import { Student } from '../../models/Student';
import { User } from '../../models/User';
@Injectable()
export class ResidenceService {
  token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+this.token})
  };

  constructor(private http: HttpClient) { }

  getBlockList() : Observable<Block[]> {
    return this.http.get<Block[]>(Server.API_ENDPOINT + 'block', this.httpOptions);
  }

  addBlock(block:Block) : Observable<Block>{
    return this.http.post<Block>(Server.API_ENDPOINT +'block', JSON.stringify(block), this.httpOptions)
  }

  updateBlock(block:Block) {
    console.log(JSON.stringify(block));
    return this.http.put(Server.API_ENDPOINT +'block', JSON.stringify(block),this.httpOptions)
  }

  deleteBlock(block:Block) {
    return this.http.delete(Server.API_ENDPOINT +'block/'+block.id,this.httpOptions)
  }

  getRoomList() : Observable<Room[]> {
    return this.http.get<Room[]>(Server.API_ENDPOINT + 'room', this.httpOptions);
  }

  addRoom(room: Room) : Observable<Room>{
    return this.http.post<Room>(Server.API_ENDPOINT +'room', JSON.stringify(room), this.httpOptions)
  }

  updateRoom(room:Room) {
    console.log(JSON.stringify(room));
    return this.http.put(Server.API_ENDPOINT +'room', JSON.stringify(room),this.httpOptions)
  }

  deleteRoom(room:Room) {
    return this.http.delete(Server.API_ENDPOINT +'room/'+room.roomNumber,this.httpOptions)
  }

  getRoomById(roomNumber) : Observable<Room> {
    return this.http.get<Room>(Server.API_ENDPOINT + 'room/'+roomNumber,this.httpOptions);
  }

  searchSortRoom(room:Room) : Observable<Room[]>{
    console.log(room)
    return this.http.post<Room[]>(Server.API_ENDPOINT +'room_search', JSON.stringify(room), this.httpOptions);
  }

  updateStudent(studentObject) {
    return this.http.put(Server.API_ENDPOINT +'student', studentObject ,this.httpOptions)
  }

  getHouseTutors(){
    return this.http.get(Server.API_ENDPOINT + 'users_housetutors', this.httpOptions);
  }

  getStudentList(roomNumber) : Observable<Student[]> {
    return this.http.get<Student[]>(Server.API_ENDPOINT +'room_students/'+roomNumber, this.httpOptions)
  } 

  addStudentToRoom(student){
    return this.http.put(Server.API_ENDPOINT +'room_students/', student ,this.httpOptions)
  }

  getSuggestionForAdd() : Observable<Student[]> {
    return this.http.get<Student[]>(Server.API_ENDPOINT +'room_suggest', this.httpOptions)
  } 

  getStudentByReg(registrationNumber) : Observable<Student> {
    return this.http.get<Student>(Server.API_ENDPOINT + 'student/'+registrationNumber,this.httpOptions);
  }

  getUserById(id) : Observable<User>{
    return this.http.get<User>(Server.API_ENDPOINT + 'user/'+id,this.httpOptions);
  }
}